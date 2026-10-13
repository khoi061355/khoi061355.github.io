import type { EducationEntry } from '../types/portfolio'

export const education = [
  {
    "degree": "Specialized class in Biology",
    "institution": "Vinschool Smart City",
    "period": "Aug 2024–present",
    "specialization": "Biology · Chemistry · Mathematics",
    "logo": "",
    "description": [
      "Grade 10 and Grade 11 GPA: 9.4/10.",
      "AS Level Biology, Chemistry and Mathematics: A in each subject.",
      "SAT: 1390 · IELTS: 8.0."
    ]
  }
] satisfies EducationEntry[]

// Academic results reported in the supplied résumé.
export const academicHighlights = [
 {value:'9.4/10', label:'GPA · Grades 10 & 11'},
 {value:'A · A · A', label:'AS Level · Biology, Chemistry & Maths'},
 {value:'1390', label:'SAT'},
 {value:'8.0', label:'IELTS'},
] satisfies import('../types/portfolio').Metric[]
