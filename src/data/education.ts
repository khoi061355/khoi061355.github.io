import type { EducationEntry } from '../types/portfolio'

export const education = [
  {
    "degree": "Specialized class in Biology",
    "institution": "Vinschool Smart City",
    "period": "Aug 2024–present",
    "specialization": "Physics · Biology · Mathematics",
    "logo": "",
    "description": [
      "Grade 10 and Grade 11 GPA: 9.3/10.",
      "AS Level Physics, Biology and Mathematics: A in each subject.",
      "SAT: 1390 · IELTS: 8.0."
    ]
  }
] satisfies EducationEntry[]

// Shared academic highlights for the introduction and education sections.
export const academicHighlights = [
 {value:'9.3/10', label:'GPA · Grades 10 & 11'},
 {value:'A · A · A', label:'AS Level · Physics, Biology & Mathematics'},
 {value:'1390', label:'SAT'},
 {value:'8.0', label:'IELTS'},
] satisfies import('../types/portfolio').Metric[]
