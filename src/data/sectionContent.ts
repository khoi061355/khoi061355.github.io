import type { SectionContent } from '../types/portfolio'

export const sectionContent = {
  "about": {
    "eyebrow": "A PERSONAL NOTE",
    "title": "Curiosity, with a practical side.",
    "description": "From the scale of a microorganism to the needs of a community, I like questions that connect science to everyday life."
  },
  "projects": {
    "eyebrow": "SELECTED WORK",
    "title": "Questions worth exploring.",
    "description": "Laboratory learning, environmental concepts and quantitative experiments—each a different way of asking what science can do."
  },
  "education": {
    "eyebrow": "ACADEMIC FOUNDATIONS",
    "title": "A foundation in biology.",
    "description": "A science-focused education, supported by quantitative thinking and a willingness to learn beyond the classroom."
  },
  "experience": {
    "eyebrow": "LEARNING THROUGH PRACTICE",
    "title": "In the lab. On the court. In the world.",
    "description": "Research, enterprise and service have taught me to observe carefully, take responsibility and work with others."
  },
  "awards": {
    "eyebrow": "RECOGNITION",
    "title": "Milestones along the way.",
    "description": "A selection of academic and sporting achievements, with supporting documents where available."
  },
  "skills": {
    "eyebrow": "METHODS & INTERESTS",
    "title": "Tools for asking better questions.",
    "description": "Hands-on exposure and developing skills—from culture media to predictive models and science communication."
  },
  "gallery": {
    "eyebrow": "THE EVIDENCE LIBRARY",
    "title": "The work, with its receipts.",
    "description": "Supporting documents for research, recognition and community involvement. Open a record to read the original evidence."
  },
  "journal": {
    "eyebrow": "WRITING",
    "title": "Thinking responsibly.",
    "description": "Exploring the role of human judgment in emerging technology."
  },
  "contact": {
    "eyebrow": "WHAT COMES NEXT",
    "title": "Keep the curiosity going.",
    "description": "Interested in research, learning opportunities and the possibilities of biotechnology."
  }
} satisfies SectionContent

export const subsectionContent = { journal: { videosEyebrow: 'Learning', videosTitle: 'Video', writingEyebrow: 'Writing', writingTitle: 'Responsible technology' }, skills: { certificatesEyebrow: 'Evidence', certificatesTitle: 'Supporting documents', certificatesDescription: 'Explore the Evidence Library for supporting records.' }, contact: { channelsTitle: 'Next steps' } } as const
