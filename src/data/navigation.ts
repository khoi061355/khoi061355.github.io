import type { NavigationItem } from '../types/portfolio'

export const navigation = [
  {
    "id": "home",
    "label": "Home",
    "enabled": true
  },
  {
    "id": "projects",
    "label": "Research",
    "enabled": true
  },
  {
    "id": "about",
    "label": "About",
    "enabled": true
  },
  {
    "id": "education",
    "label": "Education",
    "enabled": true
  },
  {
    "id": "experience",
    "label": "Experience",
    "enabled": true
  },
  {
    "id": "awards",
    "label": "Recognition",
    "enabled": true
  },
  {
    "id": "skills",
    "label": "Methods",
    "enabled": true
  },
  {
    "id": "gallery",
    "label": "Evidence",
    "enabled": true
  },
  {
    "id": "journal",
    "label": "Writing",
    "enabled": false
  },
  {
    "id": "contact",
    "label": "Contact",
    "enabled": true
  }
] satisfies NavigationItem[]

import type { SectionId } from '../types/portfolio'
export const sectionIds = ["home", "projects", "about", "education", "experience", "awards", "skills", "gallery", "journal", "contact"] as const satisfies readonly SectionId[]
