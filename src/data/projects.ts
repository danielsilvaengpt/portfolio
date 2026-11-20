export interface ProjectItem {
  id: string
  title: string
  descriptionPt: string
  descriptionEn: string
  tech: string
  period: string
  links: {
    labelPt: string
    labelEn: string
    url: string
  }[]
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'mise-recipe-agents',
    title: 'Mise — Receitas com IA & Brigada Agêntica',
    descriptionPt: 'Sistema multi-agente que gera receitas a partir da despensa real do utilizador, calculando com rigor os ingredientes em falta. Desenvolvido com metodologia CDD (Context-Driven Development).',
    descriptionEn: 'Multi-agent system generating tailored recipes from actual pantry inventory with honest missing-item audit. Built via Context-Driven Development (CDD).',
    tech: 'CrewAI, React 19, TypeScript, Python',
    period: '2026',
    links: [
      { labelPt: 'Código', labelEn: 'Code', url: 'https://github.com/danielsilvaengpt/mise-recipe-agents' }
    ],
  },
  {
    id: 'cnc-controller',
    title: 'Aplicação de controlo de máquinas CNC',
    descriptionPt: 'Software de raiz para controlar máquina CNC de conformação 3D por matriz de pinos. Conversão de superfícies CAD/NCP via trigonometria euclidiana e controlo em tempo real.',
    descriptionEn: 'From-scratch CNC controller operating a 3D pin-array forming machine. Translates CAD/NCP surfaces via Euclidean geometry and coordinates real-time actuators.',
    tech: 'Python, Geometria Euclidiana, CNC',
    period: '2024–2025',
    links: [
      { labelPt: 'Código', labelEn: 'Code', url: 'https://github.com/danielsilvaengpt/Python-CNC-Modelling-Controller' }
    ],
  },
  {
    id: 'bpm-optima',
    title: 'Modelação de processos e sistemas de informação (Optima)',
    descriptionPt: 'Análise de processos organizacionais industriais AS-IS e TO-BE com notação BPMN e OML, definindo as fundações arquiteturais para integração de sistemas ERP.',
    descriptionEn: 'Industrial business process analysis (AS-IS / TO-BE) using BPMN and OML, establishing structural models for enterprise ERP system integration.',
    tech: 'BPMN, OML, Análise de Sistemas, ERP',
    period: '2025/2026',
    links: [
      { labelPt: 'Código', labelEn: 'Code', url: 'https://github.com/danielsilvaengpt/Business-Process-Modeling' }
    ],
  },
  {
    id: 'bi-porto',
    title: 'Data Mart Snowflake & BI Portuário',
    descriptionPt: 'Conceção de Data Mart em esquema Snowflake alimentado por pipeline ETL em Python, consolidando dados transacionais de MySQL e ficheiros em SQL Server com 5 dashboards Power BI.',
    descriptionEn: 'Snowflake schema Data Mart powered by an automated Python ETL pipeline, consolidating operational MySQL and flat files into SQL Server with 5 analytical reports.',
    tech: 'Python, SQL Server, Power BI, ETL',
    period: '2024',
    links: [
      { labelPt: 'Código', labelEn: 'Code', url: 'https://github.com/danielsilvaengpt/BI-FigueiradaFoz' }
    ],
  },
  {
    id: 'dermoscan',
    title: 'DermoScan AI — Classificador de patologias cutâneas',
    descriptionPt: 'Classificador de lesões dermatológicas com Transfer Learning sobre MobileNetV2 e otimização por Random Search, atingindo 72% de precisão com interface Streamlit.',
    descriptionEn: 'Diagnostic classifier leveraging MobileNetV2 Transfer Learning and Random Search optimization, achieving 72% accuracy on benchmark dermatological datasets.',
    tech: 'Python, MobileNetV2, Streamlit',
    period: '2024',
    links: [
      { labelPt: 'Código', labelEn: 'Code', url: 'https://github.com/danielsilvaengpt/skin-disease-classifier' },
      { labelPt: 'Demonstração', labelEn: 'Demo', url: 'https://dermoscanai.streamlit.app/' }
    ],
  },
]
