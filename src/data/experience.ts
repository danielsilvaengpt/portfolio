export interface ExperienceItem {
  id: string
  rolePt: string
  roleEn: string
  company: string
  location: string
  periodPt: string
  periodEn: string
  typePt: string
  typeEn: string
  tasksPt: string[]
  tasksEn: string[]
  tags: string[]
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'meight',
    rolePt: 'Engenheiro de IA (Estágio Curricular)',
    roleEn: 'AI Engineer (Curricular Internship)',
    company: 'Meight',
    location: 'Aveiro, Portugal',
    periodPt: 'Fev 2026 – Jun 2026',
    periodEn: 'Feb 2026 – Jun 2026',
    typePt: 'Estágio Curricular',
    typeEn: 'Curricular Internship',
    tasksPt: [
      'Integrei a equipa de dados no projeto de Pesquisa Híbrida (Hybrid Search), analisando a implementação existente e propondo melhorias no fluxo de recuperação de informação.',
      'Testei e comparei abordagens de pesquisa: Keyword Search, Embeddings Search e Pesquisa Híbrida, avaliando técnicas de enriquecimento de Flat Text para maximizar a relevância dos resultados.',
      'Desenvolvi uma ferramenta interna para otimizar o onboarding de novos clientes, agilizando processos de configuração e organização de dados específicos.',
    ],
    tasksEn: [
      'Joined the data team on the Hybrid Search initiative, analyzing the current architecture and designing optimizations for information retrieval pipelines in Python.',
      'Benchmarked multiple search methodologies: Keyword Search, Embeddings Search, and Hybrid Search, experimenting with Flat Text strategies to maximize result relevance.',
      'Built an internal automation tool to accelerate client onboarding, streamlining registry procedures and data partitioning.',
    ],
    tags: ['Python', 'Hybrid Search', 'Embeddings', 'Vector Retrieval', 'Data Engineering'],
  },
  {
    id: 'iws',
    rolePt: 'Desenvolvedor Web Full-Stack (Erasmus+)',
    roleEn: 'Full-Stack Web Developer (Erasmus+)',
    company: 'Internet Web Solutions',
    location: 'Málaga, Espanha 🇪🇸',
    periodPt: 'Abr 2023 – Mai 2023',
    periodEn: 'Apr 2023 – May 2023',
    typePt: 'Estágio Erasmus+',
    typeEn: 'Erasmus+ Internship',
    tasksPt: [
      'Desenvolvimento individual da aplicação web WaterWise para cálculo e consciencialização de pegada hídrica com arquitetura PHP e base de dados MySQL.',
      'Implementação de comunicação em tempo real com AJAX e jQuery para cálculo dinâmico de consumo instantâneo.',
      'Criação de interface totalmente responsiva com CSS3 e transições fluidas focadas na experiência do utilizador.',
    ],
    tasksEn: [
      'Solo development of the WaterWise web application to track and calculate water footprint using a robust PHP and MySQL architecture.',
      'Engineered real-time data flows utilizing AJAX and jQuery for dynamic calculations without page refreshes.',
      'Crafted a fully responsive interface with CSS3 animations focused on accessibility and intuitive UX.',
    ],
    tags: ['PHP', 'MySQL', 'AJAX', 'jQuery', 'CSS3', 'Responsive Design'],
  },
  {
    id: 'optima-sw',
    rolePt: 'Desenvolvedor de Software (Estágio Curricular)',
    roleEn: 'Software Developer (Curricular Internship)',
    company: 'OPTIMA – Equipamentos CNC',
    location: 'Aveiro, Portugal',
    periodPt: 'Abr 2023 – Jun 2023',
    periodEn: 'Apr 2023 – Jun 2023',
    typePt: 'Estágio Curricular',
    typeEn: 'Curricular Internship',
    tasksPt: [
      'Conceção e desenvolvimento integral em Python de software para controlo de máquina de modelação 3D por pinos com cálculos avançados de trigonometria e geometria euclidiana.',
      'Desenvolvimento de interface gráfica (GUI) com grelha 3D e ligação em tempo real ao controlador CNC via leitura de ficheiros de log e código NCP.',
      'Validação e testes operacionais executados diretamente na máquina industrial sob condições reais de produção.',
    ],
    tasksEn: [
      'Engineered from scratch a Python software suite to control a 3D pin-modelling CNC machine using complex trigonometry and Euclidean geometry formulas.',
      'Developed a custom graphical user interface (GUI) featuring a 3D preview grid and real-time controller communications parsing NCP/log files.',
      'Conducted live hardware validation and calibration directly on industrial machinery under active operating conditions.',
    ],
    tags: ['Python', 'CNC Controller', 'Trigonometry', 'GUI', 'Euclidean Geometry'],
  },
  {
    id: 'optima-hw',
    rolePt: 'Técnico de IT & Hardware Industrial (Estágio Curricular)',
    roleEn: 'Industrial IT & Hardware Technician (Curricular Internship)',
    company: 'OPTIMA – Equipamentos CNC',
    location: 'Aveiro, Portugal',
    periodPt: 'Jun 2022 – Jul 2022',
    periodEn: 'Jun 2022 – Jul 2022',
    typePt: 'Estágio Curricular',
    typeEn: 'Curricular Internship',
    tasksPt: [
      'Configuração, calibração e operação de impressoras e scanners 3D de alta precisão (Calibry), bem como modelação técnica de peças em Fusion 360.',
      'Suporte técnico e calibração de máquinas industriais de corte a laser em conjunto com clientes utilizando LaserGRBL.',
      'Início prático do desenvolvimento de automações em Python e lógica de controlo de eixos cartesianos (XYZ).',
    ],
    tasksEn: [
      'Configured, calibrated, and operated high-precision 3D scanners (Calibry) and 3D printers, modeling technical mechanical parts in Fusion 360.',
      'Delivered technical assistance and fine-tuned industrial laser cutting equipment on-site with clients using LaserGRBL.',
      'Pioneered internal Python automation scripts and gained foundational mastery over Cartesian axis (XYZ) motion logic.',
    ],
    tags: ['Fusion 360', 'LaserGRBL', '3D Scanning', 'Industrial Automation', 'Python'],
  },
]
