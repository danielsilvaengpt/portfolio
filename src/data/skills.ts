export interface SkillCategory {
  id: string
  labelPt: string
  labelEn: string
  descriptionPt: string
  descriptionEn: string
  skills: {
    name: string
    isPrimary?: boolean
    detail?: string
  }[]
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    labelPt: 'LINGUAGENS',
    labelEn: 'LANGUAGES',
    descriptionPt: 'Linguagens de programação fundamentais',
    descriptionEn: 'Core programming languages',
    skills: [
      { name: 'Python', isPrimary: true, detail: 'Principal' },
      { name: 'SQL', isPrimary: true, detail: 'Principal' },
      { name: 'PL/SQL', isPrimary: true },
      { name: 'Java' },
      { name: 'C++' },
      { name: 'C' },
      { name: 'PHP' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
    ],
  },
  {
    id: 'data-ai',
    labelPt: 'IA & DADOS',
    labelEn: 'DATA & AI',
    descriptionPt: 'Engenharia analítica e inteligência artificial',
    descriptionEn: 'Analytical engineering & artificial intelligence',
    skills: [
      { name: 'RAG Architecture', isPrimary: true },
      { name: 'Embeddings & Vector Search', isPrimary: true },
      { name: 'Data Pipelines / ETL', isPrimary: true },
      { name: 'Machine Learning' },
      { name: 'Deep Learning (Transfer Learning)' },
      { name: 'Power BI & Data Modeling', isPrimary: true },
      { name: 'Snowflake Schema Data Marts' },
      { name: 'Data Cleansing & Transformation' },
    ],
  },
  {
    id: 'databases',
    labelPt: 'BASES DE DADOS',
    labelEn: 'DATABASES',
    descriptionPt: 'Armazenamento estruturado e vetorial',
    descriptionEn: 'Structured & vector persistence layers',
    skills: [
      { name: 'PostgreSQL', isPrimary: true },
      { name: 'pgvector', isPrimary: true },
      { name: 'MySQL' },
      { name: 'SQL Server' },
      { name: 'Relational Database Design' },
    ],
  },
  {
    id: 'tools-frameworks',
    labelPt: 'FERRAMENTAS & FRAMEWORKS',
    labelEn: 'TOOLS & FRAMEWORKS',
    descriptionPt: 'Ecossistema de desenvolvimento e automação',
    descriptionEn: 'Development & automation ecosystem',
    skills: [
      { name: 'FastAPI', isPrimary: true },
      { name: 'Streamlit', isPrimary: true },
      { name: 'Git & GitHub Workflow', isPrimary: true },
      { name: 'Fusion 360 (CAD/3D)' },
      { name: 'AJAX / RESTful APIs' },
      { name: 'Industrial CNC Interfaces' },
    ],
  },
]
