import { awards, sectionContent } from '../data/portfolio'
import SectionShell from './shared/SectionShell'
export default function Awards() {
 const copy=sectionContent.awards
 return <SectionShell id="awards" eyebrow={copy.eyebrow} title={copy.title} intro={copy.description}><div className="awards-grid">{awards.map(entry=><article className="award-record" key={entry.title}><div className="award-top"><span>{entry.tag}</span><span>{entry.year}</span></div><span className="award-mark" aria-hidden="true">✳</span><h3>{entry.title}</h3><p className="award-issuer">{entry.organization}</p><p>{entry.description}</p></article>)}</div></SectionShell>
}
