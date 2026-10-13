import { experience, sectionContent } from '../data/portfolio'
import SectionShell from './shared/SectionShell'
export default function Experience() {
 const copy=sectionContent.experience
 return <SectionShell id="experience" eyebrow={copy.eyebrow} title={copy.title} intro={copy.description}><div className="experience-list">{experience.map(entry=><article className="experience-row" key={entry.company}><p className="record-date">{entry.period}</p><div className="experience-name"><h3>{entry.company}</h3><p>{entry.title}</p></div><ul>{entry.description.map(line=><li key={line}>{line}</li>)}</ul></article>)}</div></SectionShell>
}
