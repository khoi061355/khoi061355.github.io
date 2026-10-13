import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import App from './App'
import { Provider } from './components/ui/provider'

beforeEach(()=>{localStorage.clear();window.history.replaceState(null,'','/')})
afterEach(()=>cleanup())
const mount=()=>render(<Provider><App/></Provider>)
describe('Khôi portfolio visitor journeys',()=>{
 it('introduces the student, research and honest contact state',()=>{
  mount()
  expect(screen.getByRole('heading',{level:1})).toHaveTextContent('Small systems.')
  expect(screen.getByTestId('navbar-brand-link')).toHaveTextContent('Lê Nguyên Khôi')
  expect(screen.getByTestId('portfolio-main')).toHaveAttribute('data-template-id','bioengineering')
  expect(screen.getByTestId('project-water-quality')).toHaveTextContent('Challenge concept')
  expect(screen.getByTestId('project-thehoophub')).toHaveTextContent('Sports-retail venture')
  expect(screen.getByTestId('contact-placeholder')).toHaveTextContent('Contact details coming soon')
  expect(document.querySelector('a[href^="mailto:"]')).toBeNull()
  expect(document.querySelector('form')).toBeNull()
  expect(document.body.textContent).not.toMatch(/Nham Quoc Hung|Torilab|SIM.LSE/)
  expect(screen.queryByText('Portfolio style')).not.toBeInTheDocument()
 })
 it('offers the original Word résumé with an accurate download label',()=>{
  mount()
  const link=screen.getByTestId('hero-resume-download')
  expect(link).toHaveAttribute('download','Le-Nguyen-Khoi-Resume.docx')
  expect(link.getAttribute('href')).toContain('.docx')
  expect(link).toHaveAccessibleName(/résumé \(Word document\)/)
 })
 it('navigates directly to a chapter and keeps section actions working',()=>{
  window.history.replaceState(null,'','/#/home');mount()
  expect(screen.queryByTestId('projects-section')).not.toBeInTheDocument()
  fireEvent.click(screen.getByTestId('hero-projects-link'))
  expect(window.location.hash).toBe('#/projects')
  expect(screen.getByTestId('projects-section')).toBeInTheDocument()
  expect(screen.queryByTestId('home-section')).not.toBeInTheDocument()
  fireEvent.click(screen.getByTestId('projects-next-section'))
  expect(screen.getByTestId('about-section')).toBeInTheDocument()
 })
 it('restores section navigation when using the mobile menu',()=>{
  mount();fireEvent.click(screen.getByTestId('navbar-menu-toggle'))
  expect(screen.getByRole('navigation',{name:'Section navigation'})).toBeInTheDocument()
  fireEvent.click(screen.getByTestId('navbar-mobile-link-gallery'))
  expect(window.location.hash).toBe('#gallery')
  expect(screen.queryByRole('navigation',{name:'Section navigation'})).not.toBeInTheDocument()
 })
 it('switches layout modes and keeps the home section available',()=>{
  mount();fireEvent.click(screen.getByTestId('navbar-layout-toggle'))
  expect(screen.getByTestId('portfolio-main')).toHaveAttribute('data-layout-mode','multi')
  expect(screen.queryByTestId('projects-section')).not.toBeInTheDocument()
  fireEvent.click(screen.getByTestId('navbar-layout-toggle'))
  expect(screen.getByTestId('portfolio-main')).toHaveAttribute('data-layout-mode','single')
  expect(screen.getByTestId('projects-section')).toBeInTheDocument()
 })
 it('recovers unknown chapter links without rendering stale content',()=>{
  window.history.replaceState(null,'','/#/missing');mount()
  expect(screen.getByTestId('home-section')).toBeInTheDocument()
  expect(window.location.hash).toBe('#/home')
 })
 it('handles old sample journal URLs with a useful return action',()=>{
  window.history.replaceState(null,'','/#/journal/my-first-local-journal-entry');mount()
  expect(screen.getByTestId('journal-post-not-found')).toBeInTheDocument()
  fireEvent.click(screen.getByTestId('journal-post-back-link'))
  expect(screen.getByTestId('projects-section')).toBeInTheDocument()
 })
 it('retains functional light/dark switching',async()=>{
  mount();const toggle=await screen.findByTestId('navbar-theme-toggle')
  const prior=document.documentElement.className
  fireEvent.click(toggle)
  await waitFor(()=>expect(document.documentElement.className).not.toBe(prior))
 })
})

describe('Three-design comparison mode',()=>{
 it('shows three choices and switches appearance without losing the current chapter',()=>{
  window.history.replaceState(null,'','/?preview=themes#/projects');mount()
  expect(screen.getAllByRole('radio')).toHaveLength(3)
  fireEvent.click(screen.getByRole('radio',{name:/Scientific Editorial/}))
  fireEvent.click(screen.getByRole('radio',{name:/Biotech Venture Studio/}))
  expect(document.documentElement.dataset.portfolioDesign).toBe('venture')
  expect(screen.getByTestId('projects-section')).toBeInTheDocument()
  expect(window.location.hash).toBe('#/projects')
  expect(new URLSearchParams(window.location.search).get('design')).toBe('venture')
  fireEvent.click(screen.getByRole('radio',{name:/Research Atlas/}))
  expect(document.documentElement.dataset.portfolioDesign).toBe('atlas')
  expect(screen.getByTestId('project-microbiology')).toHaveTextContent('Research assistant')
 })
 it('uses the selected Venture Studio design without comparison controls',()=>{
  window.history.replaceState(null,'','/?design=atlas');mount()
  expect(screen.queryByRole('radio')).not.toBeInTheDocument()
  expect(document.documentElement.dataset.portfolioDesign).toBe('venture')
 })
 it('opens a shareable option URL and falls back safely for an invalid option',()=>{
  window.history.replaceState(null,'','/?preview=themes&design=atlas');mount()
  expect(screen.getByRole('radio',{name:/Research Atlas/})).toBeChecked()
  cleanup();window.history.replaceState(null,'','/?preview=themes&design=unknown');mount()
  expect(screen.getByRole('radio',{name:/Biotech Venture Studio/})).toBeChecked()
  expect(document.documentElement.dataset.portfolioDesign).toBe('venture')
 })
})

it('emphasizes the supplied academic profile in the introduction and education',()=>{
 mount()
 const highlights=screen.getByRole('group',{name:'Academic profile highlights'})
 for(const value of ['9.4/10','A · A · A','1390','8.0'])expect(highlights).toHaveTextContent(value)
 expect(highlights).toHaveTextContent('Grades 10 & 11')
 expect(screen.getByTestId('education-section')).toHaveTextContent('Biology, Chemistry & Maths')
})
