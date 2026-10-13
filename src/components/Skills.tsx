import { skills, sectionContent } from '../data/portfolio'
import SectionShell from './shared/SectionShell'
export default function Skills() {
 const copy=sectionContent.skills
 return <SectionShell id="skills" eyebrow={copy.eyebrow} title={copy.title} intro={copy.description}><div className="methods-grid">{skills.map(category=><article key={category.category}><h3>{category.category}</h3><ul>{category.skills.map(skill=><li key={skill.label}><span aria-hidden="true">↗</span>{skill.label}</li>)}</ul></article>)}</div><p className="methods-note">Developing through practice. These describe my current experience and learning interests.</p></SectionShell>
}
