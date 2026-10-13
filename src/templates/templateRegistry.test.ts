import { describe, expect, it } from 'vitest'
import { portfolioTemplates, getPortfolioTemplate } from './index'
import { sectionIds } from '../data/portfolio'
describe('Dedicated presentation',()=>{
 it('supports only bioengineering, including stale preference fallback',()=>{
  expect(portfolioTemplates.map(t=>t.id)).toEqual(['bioengineering'])
  expect(getPortfolioTemplate('business').id).toBe('bioengineering')
  expect(getPortfolioTemplate('engineering').id).toBe('bioengineering')
 })
 it('keeps a complete reusable section mapping',()=>{
  for(const id of sectionIds)expect(portfolioTemplates[0].sectionComponents[id]).toBeTypeOf('function')
 })
})
