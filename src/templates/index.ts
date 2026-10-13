import { engineeringTemplate } from './engineering'
export const portfolioTemplates = [engineeringTemplate]
export const getPortfolioTemplate = (_templateId: string) => portfolioTemplates.find(template => template.id === _templateId) ?? engineeringTemplate
export const activePortfolioTemplate = engineeringTemplate
