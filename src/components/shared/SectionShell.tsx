import type { ReactNode } from 'react'
import { navigation } from '../../data/navigation'
import type { SectionId } from '../../types/portfolio'
type Props = { id: SectionId; eyebrow: string; title: string; intro: string; nextSectionId?: SectionId; children: ReactNode }
export default function SectionShell({id,eyebrow,title,intro,children}: Props) {
 const enabled = navigation.filter(item=>item.enabled)
 const next = enabled[enabled.findIndex(item=>item.id===id)+1]
 return <section id={id} className={`portfolio-section section-${id}`} aria-labelledby={`${id}-heading`} data-testid={`${id}-section`}>
 <div className="section-container"><div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2 id={`${id}-heading`} tabIndex={-1} data-chapter-heading>{title}</h2><p className="section-intro">{intro}</p></div>{children}
 {next&&<a className="next-section" href={`#${next.id}`} data-section={next.id} data-testid={`${id}-next-section`}>Continue to {next.label.toLowerCase()} <span aria-hidden="true">↓</span></a>}</div></section>
}
