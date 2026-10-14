import { describe, expect, it } from 'vitest'
import { portfolio } from '../../data/portfolio'
describe('Source-grounded portfolio content',()=>{
 it('contains no old-owner biography, contacts or links',()=>{
  expect(portfolio.profile.name).toBe('Lê Nguyên Khôi')
  expect(JSON.stringify(portfolio)).not.toMatch(/nhamhung|Nham Quoc Hung|Torilab|linkedin\.com\/in\/quoc/)
  expect(portfolio.profile.email).toBeFalsy()
  expect(portfolio.profile.socialLinks).toEqual([])
  expect(portfolio.education[0].description.join(' ')).not.toMatch(/Grade 12|_\/10/)
 })
 it('distinguishes concepts, participation, writing and retail entrepreneurship',()=>{
  expect(portfolio.projects.find(p=>p.id==='water-quality')?.status).toBe('Challenge concept')
  expect(portfolio.projects.find(p=>p.id==='microbiology')?.role).toBe('Research assistant')
  expect(portfolio.projects.find(p=>p.id==='thehoophub')?.status).toBe('Sports-retail venture')
  expect(portfolio.projects.find(p=>p.id==='football-modelling')?.details?.join(' ')).toMatch(/ROC-AUC 0.816/)
  expect(portfolio.projects.find(p=>p.id==='responsible-ai')?.actions[0].label).toBe('View service certificate')
  expect(JSON.stringify([portfolio.projects,portfolio.awards,portfolio.education])).not.toMatch(/résumé|resume|not provided|was supplied/i)
 })
 it('provides evidence descriptions and unique records rather than a bulk archive',()=>{
  expect(new Set(portfolio.gallery.map(e=>e.id)).size).toBe(portfolio.gallery.length)
  expect(portfolio.gallery).toHaveLength(6)
  expect(portfolio.gallery.map(e=>e.id)).not.toContain("community-2025")
  expect(portfolio.gallery.map(e=>e.id)).not.toContain("community-2026")
  for(const evidence of portfolio.gallery){expect(evidence.description).toBeTruthy();expect(evidence.src).not.toContain('.zip')}
 })
})
