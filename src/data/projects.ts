import cells from '../assets/illustrations/microbiology-workflow.svg'
import water from '../assets/illustrations/water-quality.svg'
import football from '../assets/illustrations/football-modelling.svg'
import ai from '../assets/illustrations/responsible-ai.svg'
import venture from '../assets/illustrations/venture-practice.svg'
import certificate from '../assets/evidence/ethicwise-service.pdf'
import type { ProjectEntry } from '../types/portfolio'

export const projects = [
  {
    "id": "microbiology",
    "imageCaption": "Culture · Rapid tests · Water samples",
    "title": "Learning from living systems",
    "description": "A summer research internship exploring how microbiology moves from culture preparation to diagnostic questions and real water samples.",
    "image": cells,
    "imageAlt": "Illustrative microbiology workflow showing a culture plate, rapid-test strip and aquaculture water sample",
    "logoKey": "biology",
    "logoLabel": "Microbiology",
    "technologies": [
      "Bacterial culture",
      "Diagnostic development",
      "Water sampling"
    ],
    "actions": [],
    "role": "Research assistant",
    "status": "Supervised laboratory experience",
    "period": "Summer 2026",
    "sourceNote": "Supported by the institute’s internship confirmation.",
    "details": [
      "Prepared culture media and participated in bacterial cultivation.",
      "Supported rapid-test development and aquaculture water-quality research."
    ]
  },
  {
    "id": "water-quality",
    "imageCaption": "Monitor · Analyse · Approve and dose",
    "title": "Healthier water. More resilient aquaculture.",
    "description": "A climate-tech challenge concept connecting water monitoring with energy-conscious microorganism dosing and human approval.",
    "image": water,
    "imageAlt": "Water-management concept showing pH, temperature, dissolved oxygen, salinity and ammonia monitoring, followed by analysis and human-approved dosing",
    "logoKey": "water",
    "logoLabel": "Water management",
    "technologies": [
      "Water quality",
      "Sensor systems",
      "Sustainable design"
    ],
    "actions": [],
    "role": "Oxford Saïd Global Climate Tech Challenge contestant",
    "status": "Challenge concept",
    "period": "2026",
    "sourceNote": "Concept description drawn from the résumé.",
    "details": [
      "Monitor pH, temperature, dissolved oxygen, salinity and ammonia.",
      "Combine cloud analysis, programmable timers and app-based approval for proposed treatment."
    ]
  },
  {
    "id": "football-modelling",
    "imageCaption": "Match data · Model · Goal probability",
    "title": "A different way to read the game",
    "description": "Using football as a quantitative playground: spatial features, match context and LightGBM to explore goal-scoring probability.",
    "image": football,
    "imageAlt": "Illustrative football pitch and player-position connections; not a plot of model results",
    "logoKey": "data",
    "logoLabel": "Computational modelling",
    "technologies": [
      "StatsBomb data",
      "LightGBM",
      "Statistical analysis"
    ],
    "actions": [],
    "role": "Independent analysis author",
    "status": "Computational project",
    "period": "2026",
    "sourceNote": "Résumé-reported results; not independently reproduced here.",
    "details": [
      "100,864 shots across 3,961 matches; validation on 811 held-out matches.",
      "Reported ROC-AUC: 0.816; log loss: 0.2604. No report or application URL was supplied."
    ]
  },
  {
    "id": "responsible-ai",
    "imageCaption": "Response · Fact-check · Human decision",
    "title": "When a confident answer is wrong",
    "description": "Writing about LLM hallucinations, high-stakes adoption and the importance of human oversight, fact-checking and responsible governance.",
    "image": ai,
    "imageAlt": "Original illustration of a document and a human-oversight check mark",
    "logoKey": "writing",
    "logoLabel": "Responsible technology",
    "technologies": [
      "AI ethics",
      "Critical evaluation",
      "Human oversight"
    ],
    "actions": [
      {
        "label": "View service certificate",
        "href": certificate,
        "ariaLabel": "View EthicWise AI volunteer-service certificate (PDF)"
      }
    ],
    "role": "EthicsAI Challenge author",
    "status": "Research writing",
    "period": "2026",
    "sourceNote": "Writing described in the résumé. The supplied PDF is a service certificate; the paper itself was not provided.",
    "details": [
      "Examined AI hallucinations through case studies including Mata v. Avianca.",
      "The associated EthicWise AI certificate records three volunteer-service hours in June 2026."
    ]
  },
  {
    "id": "thehoophub",
    "imageCaption": "TheHoopHub · Source, price and fulfil",
    "title": "TheHoopHub: an idea with real orders",
    "description": "Co-founding a basketball shop brought product selection, sourcing, pricing and customer needs into the same practical learning experience.",
    "image": venture,
    "imageAlt": "TheHoopHub basketball shop illustration showing basketball gear and the sourcing, pricing and order-fulfilment workflow",
    "logoKey": "venture",
    "logoLabel": "Entrepreneurship",
    "technologies": [
      "Product sourcing",
      "Pricing",
      "Customer orders"
    ],
    "actions": [],
    "role": "Co-founder",
    "status": "Sports-retail venture",
    "period": "Mar 2025",
    "sourceNote": "Venture responsibilities described in the résumé.",
    "details": [
      "Sourced basketball gear with accessibility and affordability in mind.",
      "Developed practical business experience to carry into future scientific ventures."
    ]
  }
] satisfies ProjectEntry[]
