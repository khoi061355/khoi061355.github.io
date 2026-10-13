import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { navigation } from './data/portfolio'
import { usePortfolioLayout } from './hooks/usePortfolioLayout'
import { activePortfolioTemplate as template } from './templates'
import { parseJournalPostHash } from './utils/journal'
import { getEnabledNavigationItems, getEnabledSectionIds, useActiveSection } from './utils/scroll'

export function PortfolioApp() {
 const items = useMemo(() => getEnabledNavigationItems(navigation), [])
 const ids = useMemo(() => getEnabledSectionIds(items), [items])
 const active = useActiveSection(ids)
 const layout = usePortfolioLayout(ids, active)
 useEffect(() => {
  if (layout.isMultiPageLayout) {
   document.getElementById(layout.activePageSection)?.scrollIntoView({behavior:'auto', block:'start'})
  }
 }, [layout.isMultiPageLayout, layout.activePageSection])
 const [hash, setHash] = useState(() => window.location.hash)
 useEffect(() => {
  const sync = () => setHash(window.location.hash)
  window.addEventListener('hashchange',sync); window.addEventListener('popstate',sync)
  return () => { window.removeEventListener('hashchange',sync); window.removeEventListener('popstate',sync) }
 }, [])
 const slug = parseJournalPostHash(hash)
 const Shell = template.ShellComponent
 const JournalPage = template.JournalPostComponent
 const visible = layout.isMultiPageLayout ? [layout.activePageSection] : ids
 return <Shell activeSection={layout.activeSection} layoutMode={layout.layoutMode} navigationItems={items} getNavigationHref={layout.getNavigationHref} onNavigate={layout.navigateToSection} onToggleLayoutMode={layout.toggleLayoutMode}>
 {slug ? <JournalPage slug={slug}/> : visible.map(id => { const Section = template.sectionComponents[id]; return <Section key={id}/> })}
 </Shell>
}
export default function App() { return <PortfolioApp/> }
