import { about, sectionContent } from '../data/portfolio'
import SectionShell from './shared/SectionShell'
export default function About() {
 const copy=sectionContent.about
 return <SectionShell id="about" eyebrow={copy.eyebrow} title={copy.title} intro={copy.description}><div className="about-layout"><blockquote className="personal-quote">“How can something so small have such a large effect?”<span>A question that keeps me curious.</span></blockquote><div className="about-prose">{about.paragraphs.map(p=><p key={p}>{p}</p>)}<div className="about-notes">{about.metrics.map(metric=><div key={metric.value}><span>{metric.label}</span><strong>{metric.value}</strong></div>)}</div></div></div></SectionShell>
}
