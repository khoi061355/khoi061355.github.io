import { useEffect, useRef } from 'react'

const targets = [
  '.hero-copy > *', '.hero-figure', '.academic-snapshot > div',
  '.section-heading', '.project-feature', '.about-layout > *',
  '.education-record', '.experience-row', '.award-record',
  '.methods-grid > *', '.evidence-card', '.contact-panel',
].join(', ')

// Content stays visible by default, including when observers are unavailable.
export function useEntranceMotion() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root || typeof IntersectionObserver === 'undefined') return

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const elements = root.querySelectorAll<HTMLElement>(targets)
    const observer = new IntersectionObserver(entries => {
      if (preference.matches) return
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('motion-enter')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' })

    const sync = () => {
      observer.disconnect()
      if (preference.matches) return
      elements.forEach((element, index) => {
        if (element.classList.contains('motion-enter')) return
        element.style.setProperty('--entrance-delay', `${index % 3 * 60}ms`)
        observer.observe(element)
      })
    }
    sync()
    preference.addEventListener('change', sync)
    return () => {
      observer.disconnect()
      preference.removeEventListener('change', sync)
    }
  }, [])

  return ref
}
