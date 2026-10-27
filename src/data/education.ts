export interface EducationItem {
  id: string
  degreePt: string
  degreeEn: string
  institution: string
  location: string
  period: string
  branchPt?: string
  branchEn?: string
  detailsPt: string[]
  detailsEn: string[]
}

export interface AwardItem {
  id: string
  titlePt: string
  titleEn: string
  competitionPt: string
  competitionEn: string
  categoryPt: string
  categoryEn: string
  year: string
  levelPt: string
  levelEn: string
  descriptionPt: string
  descriptionEn: string
}

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'isec',
    degreePt: 'Licenciatura em Engenharia Informática',
    degreeEn: 'BSc in Computer Engineering',
    institution: 'Instituto Superior de Engenharia de Coimbra (ISEC)',
    location: 'Coimbra, Portugal',
    period: '2023 – 2026',
    branchPt: 'Ramo de Sistemas de Informação',
    branchEn: 'Information Systems Branch',
    detailsPt: [
      'Formação sólida em engenharia de software, modelação de bases de dados, inteligência artificial, redes e arquiteturas de sistemas distribuídos.',
      'Desenvolvimento de projetos práticos em pipelines de dados (Snowflake schema), visão computacional com deep learning e computação em larga escala.',
    ],
    detailsEn: [
      'Rigorous curriculum focusing on software engineering, database systems modeling, artificial intelligence algorithms, and distributed computing.',
      'Practical engineering execution across enterprise data warehousing (Snowflake schema), deep learning architectures, and scalable analytics.',
    ],
  },
  {
    id: 'serafim-leite',
    degreePt: 'Técnico de Gestão e Programação de Sistemas Informáticos',
    degreeEn: 'Technical Diploma in IT Management & Systems Programming',
    institution: 'Escola Secundária Dr. Serafim Leite',
    location: 'São João da Madeira, Portugal',
    period: '2020 – 2023',
    detailsPt: [
      'Formação profissional com ênfase em algoritmos, desenvolvimento de software, arquitetura de computadores, redes e bases de dados relacionais.',
      'Qualificação direta e participação destacada em campeonatos de programação e competições de competências profissionais.',
    ],
    detailsEn: [
      'Professional engineering foundations in computer architecture, structured algorithms, networking protocols, and relational database systems.',
      'Direct qualification and distinguished performance in national competitive programming and technical skill championships.',
    ],
  },
]

export const AWARDS: AwardItem[] = [
  {
    id: 'worldskills-2023',
    titlePt: 'Medalha de Excelência',
    titleEn: 'Medal of Excellence',
    competitionPt: 'WorldSkills Portugal (Campeonato Nacional das Profissões)',
    competitionEn: 'WorldSkills Portugal (National Skills Competition)',
    categoryPt: 'Desenvolvimento de Aplicações Móveis (Mobile Application Development)',
    categoryEn: 'Mobile Application Development',
    year: '2023',
    levelPt: 'Âmbito Nacional',
    levelEn: 'National Level',
    descriptionPt:
      'Distinção de elevado mérito técnico concedida aos melhores concorrentes a nível nacional, avaliando competências avançadas de arquitetura de software, velocidade de implementação, robustez de código e resolução de problemas sob restrições estritas de tempo.',
    descriptionEn:
      'High-tier technical distinction awarded to premier national competitors, rigorously assessing software architecture capabilities, agile execution, fault-tolerant coding, and complex problem solving under strict examination standards.',
  },
]
