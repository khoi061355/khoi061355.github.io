import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import JournalPostPage from '../components/JournalPostPage'
afterEach(()=>cleanup())
it('makes old sample writing links unavailable with a selected-work return path',()=>{
 render(<JournalPostPage slug="my-first-local-journal-entry"/> )
 expect(screen.getByRole('heading',{name:'Journal post not found'})).toBeInTheDocument()
 expect(screen.getByTestId('journal-post-back-link')).toHaveAttribute('href','#projects')
 expect(document.body.textContent).not.toMatch(/SIM.LSE|mentoring program/)
})
