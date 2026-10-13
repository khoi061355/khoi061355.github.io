/// <reference types="node" />
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
const styles=readFileSync('src/index.css','utf8')
function luminance(hex:string){const rgb=hex.replace('#','').match(/../g)!.map(c=>parseInt(c,16)/255).map(c=>c<=0.04045?c/12.92:((c+0.055)/1.055)**2.4);return rgb[0]*0.2126+rgb[1]*0.7152+rgb[2]*0.0722}
function contrast(a:string,b:string){const values=[luminance(a),luminance(b)].sort((x,y)=>y-x);return (values[0]+0.05)/(values[1]+0.05)}
describe('Readable color modes',()=>{
 for(const [label,pattern] of [['light',/:root, \.light \{([\s\S]*?)\}/],['dark',/\.dark \{([\s\S]*?)\}/]] as const){
  it(`keeps ${label} text and actions at accessible contrast`,()=>{
   const block=styles.match(pattern)![1];const color=(name:string)=>block.match(new RegExp(`--${name}: (#[0-9a-f]{6});`))![1]
   for(const bg of ['bg-900','bg-800','bg-700','surface-900','surface-800'])for(const fg of ['text-100','text-300','accent-300'])expect(contrast(color(fg),color(bg)),`${fg} on ${bg}`).toBeGreaterThanOrEqual(4.5)
   expect(contrast(color('primary-bg'),color('primary-text'))).toBeGreaterThanOrEqual(4.5)
  })
 }
})

describe('Design-preview contrast',()=>{
 const tokens=(block:string)=>Object.fromEntries([...block.matchAll(/--([a-z0-9-]+): (#[0-9a-f]{6});/g)].map(match=>[match[1],match[2]]))
 const light=tokens(styles.match(/:root, \.light \{([\s\S]*?)\}/)![1])
 const dark=tokens(styles.match(/\.dark \{([\s\S]*?)\}/)![1])
 for(const design of ['venture','atlas'])for(const mode of ['light','dark']){
  it(`keeps ${design} readable in ${mode} mode`,()=>{
   const own=styles.match(new RegExp(`\n\\[data-portfolio-design="${design}"\\] \\{([\\s\\S]*?)\n\\}`))![1]
   const overrides=mode==='dark'?styles.match(new RegExp(`\\.dark\\[data-portfolio-design="${design}"\\] \\{([\\s\\S]*?)\n\\}`))![1]:''
   const colors={...(mode==='dark'?dark:light),...tokens(own),...tokens(overrides)}
   for(const bg of ['bg-900','bg-800','bg-700','surface-900','surface-800'])for(const fg of ['text-100','text-300','accent-300'])expect(contrast(colors[fg],colors[bg]),`${fg} on ${bg}`).toBeGreaterThanOrEqual(4.5)
   expect(contrast(colors['primary-bg'],colors['primary-text'])).toBeGreaterThanOrEqual(4.5)
  })
 }
})
