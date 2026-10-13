import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { profile } from '../../data/portfolio'
import type { PortfolioShellProps } from '../types'
import type { SectionId } from '../../types/portfolio'
export default function EngineeringShell({ children, ...props }: PortfolioShellProps) {
 const previews = [
  {id:'editorial', label:'Scientific Editorial', detail:'Warm, thoughtful and research-led.'},
  {id:'venture', label:'Biotech Venture Studio', detail:'Bold, energetic and forward-looking.'},
  {id:'atlas', label:'Research Atlas', detail:'Precise, open and academically focused.'},
 ] as const
 const comparing = new URLSearchParams(window.location.search).get('preview') === 'themes'
 const [design, setDesign] = useState(() => {
  const selected = new URLSearchParams(window.location.search).get('design')
  return comparing && previews.some(option=>option.id===selected) ? selected! : 'venture'
 })
 useEffect(() => {
  document.documentElement.dataset.portfolioDesign = design
  return () => { delete document.documentElement.dataset.portfolioDesign }
 }, [design])
 return <div className="portfolio-template portfolio-template-bioengineering" data-template-id="bioengineering">
 <a className="skip-link" href="#portfolio-content">Skip to content</a>
 {comparing&&<aside className="design-preview-bar" aria-label="Portfolio design previews"><div className="design-preview-intro"><span className="eyebrow">DESIGN COMPARISON</span><p>Three directions. One story.</p></div><fieldset className="design-options"><legend className="sr-only">Choose a portfolio design preview</legend>{previews.map(option=><label key={option.id} className="design-option" data-selected={design===option.id}><input className="sr-only" type="radio" name="portfolio-design" value={option.id} checked={design===option.id} data-testid={`design-preview-${option.id}`} onChange={()=>{
  setDesign(option.id)
  const url = new URL(window.location.href);url.searchParams.set('design',option.id);window.history.replaceState(null,'',url)
 }}/><span className={`design-swatch design-swatch-${option.id}`} aria-hidden="true"/><span><strong>{option.label}</strong><small>{option.detail}</small></span></label>)}</fieldset></aside>}
 <Navbar {...props}/>
 <main id="portfolio-content" tabIndex={-1} data-testid="portfolio-main" data-template-id="bioengineering" data-layout-mode={props.layoutMode} onClick={event => {
  const target = (event.target as Element).closest<HTMLAnchorElement>('a[data-section]')
  if (!target || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
  const id = target.dataset.section as SectionId
  if (props.navigationItems.some(item => item.id === id)) { event.preventDefault(); props.onNavigate(id) }
 }}>{children}</main>
 <footer className="site-footer"><span>{profile.name}</span><span>Biology. Inquiry. Possibility.</span><a href="#home" data-testid="footer-home-link" onClick={event => {event.preventDefault();props.onNavigate('home')}}>Back to top ↑</a></footer>
 </div>
}
