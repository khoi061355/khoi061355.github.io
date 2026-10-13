import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Gallery from './Gallery'
import { Provider } from './ui/provider'
afterEach(()=>cleanup())
const mount=()=>render(<Provider><Gallery/></Provider>)
describe('Supporting evidence preview',()=>{
 it('opens a titled dialog and restores keyboard focus after Escape',async()=>{
  mount();const opener=screen.getByRole('button',{name:'Open Microbiology internship supporting document'})
  opener.focus();fireEvent.click(opener)
  const dialog=await screen.findByRole('dialog',{name:'Microbiology internship'})
  expect(dialog).toHaveTextContent('10 June to 10 August 2026')
  await waitFor(()=>expect(dialog.contains(document.activeElement)).toBe(true))
  fireEvent.keyDown(screen.getByTestId('evidence-close'),{key:'Escape',code:'Escape',keyCode:27})
  await waitFor(()=>expect(screen.queryByRole('dialog')).not.toBeInTheDocument())
  await waitFor(()=>expect(opener).toHaveFocus())
 })
 it('omits the two removed community records and retains the evidence close control',async()=>{
  mount();expect(screen.queryByTestId('gallery-card-community-2025')).not.toBeInTheDocument();expect(screen.queryByTestId('gallery-card-community-2026')).not.toBeInTheDocument();const opener=screen.getByTestId('gallery-card-factory');fireEvent.click(opener)
  const dialog=await screen.findByRole('dialog',{name:'Science beyond the laboratory'})
  expect(dialog.querySelectorAll('img')).toHaveLength(1)
  expect(dialog).toHaveTextContent('19 June 2026')
  fireEvent.click(screen.getByTestId('evidence-close'))
  await waitFor(()=>expect(screen.queryByRole('dialog')).not.toBeInTheDocument())
 })
 it('makes a larger reading view available and preserves source orientation',async()=>{
  mount();fireEvent.click(screen.getByTestId('gallery-card-bbo'))
  const dialog=await screen.findByRole('dialog',{name:'British Biology Olympiad'})
  expect(dialog.querySelector('img')?.style.transform).toContain('rotate(180deg)')
  const zoom=screen.getByTestId('evidence-zoom-toggle');fireEvent.click(zoom)
  expect(zoom).toHaveAttribute('aria-pressed','true')
  fireEvent.click(zoom);expect(zoom).toHaveAttribute('aria-pressed','false')
 })
})
