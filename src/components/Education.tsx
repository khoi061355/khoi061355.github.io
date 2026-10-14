import { academicHighlights, education, sectionContent } from '../data/portfolio'
import SectionShell from './shared/SectionShell'
export default function Education() {
 const copy=sectionContent.education
 return <SectionShell id="education" eyebrow={copy.eyebrow} title={copy.title} intro={copy.description}>{education.map(entry=><article className="education-record" key={entry.institution}><div className="education-identity"><p className="eyebrow">{entry.period}</p><h3>{entry.institution}</h3><p>{entry.degree}</p><p className="education-focus">{entry.specialization}</p></div><div className="education-results"><p className="record-label">Academic profile</p><dl className="academic-results-grid">{academicHighlights.map(metric=><div className="academic-result" key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl></div></article>)}</SectionShell>
}
