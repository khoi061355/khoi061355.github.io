import { profile, sectionContent } from '../data/portfolio'
import SectionShell from './shared/SectionShell'
export default function Contact() {
 const copy=sectionContent.contact
 return <SectionShell id="contact" eyebrow={copy.eyebrow} title={copy.title} intro={copy.description}><div className="contact-panel"><span className="contact-symbol" aria-hidden="true">✳</span><div><p>Every useful idea starts with a good question.</p><h3>Let’s see where the next one leads.</h3><p className="contact-placeholder" data-testid="contact-placeholder">Contact details coming soon</p><a className="action primary" href={profile.resume.href} download={profile.resume.fileName} aria-label={profile.resume.ariaLabel} data-testid="contact-resume-download">Download résumé <span aria-hidden="true">↓</span></a></div></div></SectionShell>
}
