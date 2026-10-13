import SectionShell from './shared/SectionShell'
import { sectionContent } from '../data/portfolio'
export default function Journal() { const copy=sectionContent.journal;return <SectionShell id="journal" eyebrow={copy.eyebrow} title={copy.title} intro={copy.description}><p>Explore the responsible-AI writing summary in selected work.</p><a href="#projects" data-section="projects" data-testid="journal-projects-link">Return to selected work ↗</a></SectionShell> }
