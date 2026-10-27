import { act, cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { useEntranceMotion } from './useEntranceMotion'

function Scene() {
  const ref = useEntranceMotion()
  return <section ref={ref}><h2 className="section-heading">Research</h2></section>
}

afterEach(() => { cleanup(); vi.unstubAllGlobals() })

function mockMotion(reduced = false) {
  let notify: IntersectionObserverCallback = () => undefined
  const observe = vi.fn()
  const unobserve = vi.fn()
  const disconnect = vi.fn()
  const preference = Object.assign(new EventTarget(), { matches: reduced })
  vi.stubGlobal('matchMedia', () => preference)
  vi.stubGlobal('IntersectionObserver', class {
    constructor(callback: IntersectionObserverCallback) { notify = callback }
    observe = observe
    unobserve = unobserve
    disconnect = disconnect
  })
  return { observe, unobserve, disconnect, preference, enter(element: Element) {
    act(() => notify([{ target: element, isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver))
  } }
}

it('reveals visible content once and disconnects when the section unmounts', () => {
  const motion = mockMotion()
  const { unmount } = render(<Scene />)
  const heading = screen.getByRole('heading')
  expect(motion.observe).toHaveBeenCalledWith(heading)
  expect(heading).not.toHaveClass('motion-enter')
  motion.enter(heading)
  expect(heading).toHaveClass('motion-enter')
  expect(motion.unobserve).toHaveBeenCalledWith(heading)
  const before = motion.disconnect.mock.calls.length
  unmount()
  expect(motion.disconnect).toHaveBeenCalledTimes(before + 1)
})

it('honors reduced motion initially and when the preference changes', () => {
  const motion = mockMotion(true)
  render(<Scene />)
  expect(motion.observe).not.toHaveBeenCalled()
  act(() => { motion.preference.matches = false; motion.preference.dispatchEvent(new Event('change')) })
  expect(motion.observe).toHaveBeenCalledWith(screen.getByRole('heading'))
  act(() => { motion.preference.matches = true; motion.preference.dispatchEvent(new Event('change')) })
  // Even a queued intersection callback cannot start motion after opting out.
  motion.enter(screen.getByRole('heading'))
  expect(screen.getByRole('heading')).not.toHaveClass('motion-enter')
})

it('keeps content available when IntersectionObserver is unsupported', () => {
  vi.stubGlobal('IntersectionObserver', undefined)
  render(<Scene />)
  expect(screen.getByRole('heading')).toBeVisible()
  expect(screen.getByRole('heading')).not.toHaveClass('motion-enter')
})
