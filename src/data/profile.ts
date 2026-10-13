import resumeDocument from "../assets/Resume - Lê Nguyên Khôi.docx?url"
import type { Profile } from '../types/portfolio'

export const profile = {
  "name": "Lê Nguyên Khôi",
  "slug": "le-nguyen-khoi",
  "role": "Biology student · aspiring bioengineer",
  "location": "Hanoi, Vietnam",
  "email": "",
  "profileImage": "",
  "resume": {
    "label": "Download résumé",
    "href": resumeDocument,
    "fileName": "Le-Nguyen-Khoi-Resume.docx",
    "ariaLabel": "Download Lê Nguyên Khôi résumé (Word document)"
  },
  "summary": "I’m curious about the smallest living systems—and the possibilities they open up. Through microbiology, computational modelling and practical entrepreneurship, I’m exploring how science can become something useful.",
  "socialLinks": []
} satisfies Profile

import type { HeroSection } from '../types/portfolio'
export const hero = {
  "eyebrow": "BIOENGINEERING · BIOTECH ENTREPRENEURSHIP",
  "statusBadges": [
    "Student researcher",
    "Hanoi, Vietnam"
  ],
  "headline": "Small systems.\nMeaningful\npossibilities.",
  "intro": "I’m curious about the smallest living systems—and the possibilities they open up. Through microbiology, computational modelling and practical entrepreneurship, I’m exploring how science can become something useful.",
  "stats": [
    {
      "value": "Biology",
      "label": "Academic foundation"
    },
    {
      "value": "Microbiology",
      "label": "Research experience"
    },
    {
      "value": "Entrepreneurship",
      "label": "A practical curiosity"
    }
  ],
  "primaryAction": {
    "label": "Explore my work",
    "sectionId": "projects",
    "ariaLabel": "Explore selected research and projects"
  },
  "secondaryAction": {
    "label": "Supporting evidence",
    "sectionId": "gallery",
    "ariaLabel": "View supporting evidence"
  },
  "stackHighlights": [
    "Living systems",
    "Quantitative thinking",
    "Ideas into action"
  ]
} satisfies HeroSection
