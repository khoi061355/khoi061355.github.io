import type { ComponentType, ReactNode } from 'react'
import type { LayoutMode } from '../hooks/usePortfolioLayout'
import type { NavigationItem, SectionId } from '../types/portfolio'
export type PortfolioTemplateId = 'bioengineering'
export type JournalPostPageProps = { slug: string }
export type PortfolioShellProps = {
 activeSection: SectionId; layoutMode: LayoutMode; navigationItems: readonly NavigationItem[];
 getNavigationHref: (id: SectionId) => string; onNavigate: (id: SectionId) => void;
 onToggleLayoutMode: () => void; children: ReactNode;
}
export type PortfolioTemplate = {
 id: PortfolioTemplateId; label: string; description: string;
 ShellComponent: ComponentType<PortfolioShellProps>; JournalPostComponent: ComponentType<JournalPostPageProps>;
 chapterLabels: Record<SectionId,string>; sectionComponents: Record<SectionId,ComponentType>;
 isSectionVisible?: (id: SectionId) => boolean;
}
