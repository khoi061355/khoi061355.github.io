import evidence0 from '../assets/evidence/microbiology-internship.jpg'
import evidence1 from '../assets/evidence/biology-olympiad.jpg'
import evidence2 from '../assets/evidence/factory-tour.jpg'
import evidence3 from '../assets/evidence/bewell-workshop.jpg'
import evidence4 from '../assets/evidence/wellbeing-ambassador.jpg'
import evidence5 from '../assets/evidence/academic-award.jpg'
import type { GalleryItem } from '../types/portfolio'

export const gallery = [
  {
    "id": "research",
    "src": evidence0,
    "alt": "Institute of Microbiology and Biotechnology: Microbiology internship supporting document",
    "title": "Microbiology internship",
    "description": "Confirmation of the supervised internship from 10 June to 10 August 2026 and participation in laboratory research activities.",
    "issuer": "Institute of Microbiology and Biotechnology",
    "year": "2026",
    "rotation": 0,
    "additionalPages": []
  },
  {
    "id": "bbo",
    "src": evidence1,
    "aspectRatio": 1.3333333333,
    "alt": "Highly Commended: British Biology Olympiad supporting document",
    "title": "British Biology Olympiad",
    "description": "Certificate of Highly Commended recognition in the 2026 British Biology Olympiad.",
    "issuer": "Highly Commended",
    "year": "2026",
    "rotation": 180,
    "additionalPages": []
  },
  {
    "id": "factory",
    "src": evidence2,
    "aspectRatio": 1.3333333333,
    "alt": "Sao Thai Duong factory visit: Science beyond the laboratory supporting document",
    "title": "Science beyond the laboratory",
    "description": "Confirmation of a learning visit on 19 June 2026, exploring production, quality management and scientific applications.",
    "issuer": "Sao Thai Duong factory visit",
    "year": "2026",
    "rotation": -90,
    "additionalPages": []
  },
  {
    "id": "bewell",
    "src": evidence3,
    "aspectRatio": 1.3333333333,
    "alt": "Vinschool BeWell: Neuroscience through outreach supporting document",
    "title": "Neuroscience through outreach",
    "description": "Certificate for outstanding contribution to the 2023–2024 BeWell project, issued 31 May 2024.",
    "issuer": "Vinschool BeWell",
    "year": "2024",
    "rotation": -90,
    "additionalPages": []
  },
  {
    "id": "wellbeing",
    "src": evidence4,
    "aspectRatio": 1.3333333333,
    "alt": "Vinschool Metropolis: Wellbeing ambassador supporting document",
    "title": "Wellbeing ambassador",
    "description": "Recognition as a physical wellbeing ambassador for the 2024–2025 school year.",
    "issuer": "Vinschool Metropolis",
    "year": "2024–2025",
    "rotation": -90,
    "additionalPages": []
  },
  {
    "id": "academics",
    "src": evidence5,
    "alt": "Grade 9 English competition: District academic recognition supporting document",
    "title": "District academic recognition",
    "description": "Consolation-prize certificate issued 20 November 2023 for the district English competition.",
    "issuer": "Grade 9 English competition",
    "year": "2023",
    "rotation": -90,
    "additionalPages": []
  }
] satisfies GalleryItem[]
