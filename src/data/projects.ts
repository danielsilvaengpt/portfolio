export interface ProjectItem {
  id: string
  categoryPt: string
  categoryEn: string
  title: string
  taglinePt: string
  taglineEn: string
  descriptionPt: string
  descriptionEn: string
  stack: string[]
  flowPt?: string
  flowEn?: string
  githubUrl?: string
  demoUrl?: string
  isFeatured?: boolean
  typePt: string
  typeEn: string
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'mise-recipe-agents',
    categoryPt: 'IA Agêntica · Orquestração de Agentes',
    categoryEn: 'Agentic AI · Multi-Agent Orchestration',
    title: 'Mise — Receitas com IA & Brigada Agêntica',
    taglinePt: 'Orquestração multi-agente inteligente para criação de receitas a partir da despensa real',
    taglineEn: 'Intelligent multi-agent orchestration generating recipes from real home pantries',
    descriptionPt:
      'Sistema agêntico concebido como uma brigada inteligente de cozinha que gera receitas baseadas nos ingredientes reais da despensa, identificando com honestidade os itens em falta. Desenvolvido com metodologia de Agentic Vibe Coding e CDD (Context-Driven Development), inclui landing page cinematográfica de alta fidelidade sensorial e arquitetura preparada para backend Python com CrewAI e FastAPI.',
    descriptionEn:
      'Agentic AI kitchen brigade generating tailored recipes strictly from available household pantry items, transparently distinguishing existing ingredients from missing staples. Built via Context-Driven Development (CDD) and Agentic Vibe Coding, featuring a high-fidelity tactile web application and a multi-agent backend architecture designed for CrewAI and FastAPI.',
    stack: ['Agentic AI', 'CrewAI', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'FastAPI', 'Python'],
    flowPt: 'Despensa do Utilizador → Brigada Agêntica (Chef, Redator, Revisor) → Avaliação de Faltas → Receita Estruturada',
    flowEn: 'User Pantry → Agent Brigade (Chef, Writer, Reviewer) → Missing Items Audit → Structured Recipe Markdown',
    githubUrl: 'https://github.com/danielsilvaengpt/mise-recipe-agents',
    isFeatured: true,
    typePt: 'Projeto Pessoal / IA Agêntica',
    typeEn: 'Personal Project / Agentic AI',
  },
  {
    id: 'industria',
    categoryPt: 'Inteligência Artificial · RAG',
    categoryEn: 'Artificial Intelligence · RAG',
    title: 'IndustrIA',
    taglinePt: 'Sistema inteligente de Q&A para documentação técnica industrial',
    taglineEn: 'Intelligent Q&A retrieval engine for industrial technical documentation',
    descriptionPt:
      'Sistema de recuperação e resposta a perguntas sobre manuais complexos de manutenção industrial recorrendo à arquitetura RAG (Retrieval-Augmented Generation). Resolve a heterogeneidade de manuais estruturando PDFs, gerando embeddings semânticos e consultando LLMs com contexto exato.',
    descriptionEn:
      'Retrieval-Augmented Generation (RAG) platform tailored for complex industrial machinery manuals. Addresses unstructured PDF formats by ingesting, chunking, and embedding documentation into pgvector for high-precision semantic search fed into Groq LLMs.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Groq LLM', 'all-MiniLM-L6-v2'],
    flowPt: 'PDFs Manuais → Extração & Chunking → Embeddings → PostgreSQL + pgvector (Cosine Similarity) → LLM (Groq) → FastAPI',
    flowEn: 'Technical PDFs → Extraction & Chunking → Embeddings → PostgreSQL + pgvector (Cosine Similarity) → LLM (Groq) → FastAPI',
    githubUrl: 'https://github.com/danielsilvaengpt',
    isFeatured: true,
    typePt: 'Projeto Pessoal / Em Desenvolvimento',
    typeEn: 'Personal Project / In Active Dev',
  },
  {
    id: 'bi-porto',
    categoryPt: 'Engenharia de Dados · BI',
    categoryEn: 'Data Engineering · BI',
    title: 'BI do Porto Marítimo da Figueira da Foz',
    taglinePt: 'Data Mart Snowflake & Pipeline ETL para gestão de operações portuárias',
    taglineEn: 'Snowflake Schema Data Mart & ETL pipeline for maritime port logistics',
    descriptionPt:
      'Conceção de um Data Mart multidimensional em esquema Snowflake, alimentado por um pipeline ETL robusto em Python. Consolida dados transacionais de ERPs simulados em MySQL e ficheiros CSV em SQL Server, expondo 5 relatórios analíticos em Power BI para monitorização de receita e produtividade.',
    descriptionEn:
      'Engineered an enterprise-grade Snowflake Schema Data Mart backed by an automated Python ETL pipeline. Harmonized disparate operational data from MySQL and flat files into SQL Server, powering 5 analytical Power BI dashboards tracking financial KPIs and vessel throughput.',
    stack: ['Python', 'MySQL', 'SQL Server', 'Power BI', 'Snowflake Schema', 'ETL'],
    flowPt: 'ERP Simulado (MySQL) + CSVs → Pipeline ETL Python → SQL Server Data Mart (Snowflake) → Power BI (5 Dashboards)',
    flowEn: 'Simulated ERP (MySQL) + CSVs → Python ETL Pipeline → SQL Server Data Mart (Snowflake) → Power BI (5 Dashboards)',
    githubUrl: 'https://github.com/danielsilvaengpt/BI-FigueiradaFoz',
    isFeatured: true,
    typePt: 'Projeto Académico (Sistemas de Informação II)',
    typeEn: 'Academic Project (Information Systems II)',
  },
  {
    id: 'bpm',
    categoryPt: 'Modelação de Processos · ERP',
    categoryEn: 'Process Modeling · ERP',
    title: 'Business Process Modeling',
    taglinePt: 'Modelação BPMN & OML de processos organizacionais com fundações para ERP',
    taglineEn: 'BPMN & OML organizational process modeling with ERP system foundations',
    descriptionPt:
      'Conjunto de projetos de modelação de processos de negócio e organizacionais utilizando BPMN (Business Process Model and Notation) e OML (Object Modeling Language). Inclui diagramas completos, documentação técnica e relatórios detalhados que estabelecem as bases para sistemas ERP e de Informação empresariais. Integra princípios de análise de requisitos, fluxo de dados e alinhamento de processos com estratégia organizacional.',
    descriptionEn:
      'A collection of business process and organizational modeling projects using BPMN and OML notation standards. Covers end-to-end process documentation, technical diagrams, and comprehensive reports that form the analytical foundation for ERP and Information System implementations. Applies requirements analysis, data-flow mapping, and process-to-strategy alignment methodologies.',
    stack: ['BPMN', 'OML', 'Process Analysis', 'ERP Foundations', 'Technical Documentation', 'UML'],
    flowPt: 'Levantamento de Requisitos → Modelação BPMN/OML → Diagramas de Processo → Documentação Técnica → Base para ERP/SI',
    flowEn: 'Requirements Gathering → BPMN/OML Modeling → Process Diagrams → Technical Documentation → ERP/IS Foundation',
    githubUrl: 'https://github.com/danielsilvaengpt/Business-Process-Modeling',
    isFeatured: true,
    typePt: 'Projeto Académico / Análise de Sistemas',
    typeEn: 'Academic Project / Systems Analysis',
  },
  {
    id: 'dermoscan',
    categoryPt: 'Deep Learning · Visão Computacional',
    categoryEn: 'Deep Learning · Computer Vision',
    title: 'DermoScan AI – Classificador de Doenças de Pele',
    taglinePt: 'Diagnóstico precoce de lesões dermatológicas com Transfer Learning',
    taglineEn: 'Early detection of dermatological conditions using Transfer Learning',
    descriptionPt:
      'Classificador de lesões e patologias cutâneas desenvolvido com Transfer Learning sobre a arquitetura MobileNetV2, treinado com datasets dermatológicos do Kaggle. Utilizou Random Search para otimização de hiperparâmetros, atingindo 72% de precisão com interface web interativa em Streamlit.',
    descriptionEn:
      'Deep learning diagnostic classifier utilizing MobileNetV2 Transfer Learning for skin lesion classification. Optimized via Random Search hyperparameter tuning to reach 72% accuracy on Kaggle dermatological benchmarks, deployed via an interactive Streamlit web app.',
    stack: ['Python', 'MobileNetV2', 'Deep Learning', 'Streamlit', 'Computer Vision'],
    flowPt: 'Imagem Lesão → Pré-processamento → MobileNetV2 (Transfer Learning) → Otimização Random Search → Aplicação Streamlit',
    flowEn: 'Skin Lesion Image → Preprocessing → MobileNetV2 (Transfer Learning) → Random Search Optimization → Streamlit App',
    githubUrl: 'https://github.com/danielsilvaengpt/skin-disease-classifier',
    demoUrl: 'https://dermoscanai.streamlit.app/',
    isFeatured: true,
    typePt: 'Projeto Académico / Investigação',
    typeEn: 'Academic Project / Research',
  },
  {
    id: 'waterwise',
    categoryPt: 'Full-Stack Web · Erasmus+',
    categoryEn: 'Full-Stack Web · Erasmus+',
    title: 'WaterWise Calculator',
    taglinePt: 'Calculadora em tempo real para medição e pegada de consumo hídrico',
    taglineEn: 'Real-time interactive water footprint monitoring and analytics tool',
    descriptionPt:
      'Aplicação web desenvolvida a solo durante o estágio internacional Erasmus+ em Málaga. Permite compor listas de alimentos e calcular a pegada hídrica total em mililitros através de cálculos dinâmicos assíncronos e layout totalmente responsivo.',
    descriptionEn:
      'Full-stack ecological assessment application developed solo during the Erasmus+ internship in Málaga. Calculates household water footprints in real-time through asynchronous background processing and dynamic responsive controls.',
    stack: ['PHP', 'MySQL', 'AJAX', 'jQuery', 'CSS3', 'Responsive UI'],
    flowPt: 'Interface UI (jQuery/CSS3) → Pedidos AJAX Assíncronos → Lógica Backend PHP → Base de Dados MySQL',
    flowEn: 'UI Interface (jQuery/CSS3) → Asynchronous AJAX Requests → PHP Backend Processing → MySQL Database',
    githubUrl: 'https://github.com/danielsilvaengpt/WaterWise-Calculator',
    typePt: 'Projeto Internacional Erasmus+',
    typeEn: 'Erasmus+ International Project',
  },
  {
    id: 'cnc-controller',
    categoryPt: 'Automação Industrial & Modelação 3D',
    categoryEn: 'Industrial Automation & 3D Modeling',
    title: 'Python CNC Modelling Controller',
    taglinePt: 'Software de controlo em tempo real para conformação 3D por pinos',
    taglineEn: 'Real-time CNC execution engine for automated 3D pin matrix shaping',
    descriptionPt:
      'Software concebido de raiz durante o estágio na OPTIMA para controlar uma máquina CNC de modelação 3D por matriz de pinos. Importa ficheiros CAD/NCP, converte as superfícies através de cálculos trigonométricos e euclidianos, e comanda os atuadores da máquina em tempo real com pré-visualização em grelha 3D.',
    descriptionEn:
      'Industrial control application developed from scratch at OPTIMA to operate a 3D pin-array forming CNC machine. Ingests CAD and NCP files, executes geometric and trigonometric transformations, and commands real-time pin displacement alongside a 3D visualization canvas.',
    stack: ['Python', 'Trigonometry', 'Euclidean Geometry', 'GUI 3D Grid', 'CNC Communication'],
    flowPt: 'Ficheiros CAD / NCP → Cálculos Geometria & Trigonometria → Interface 3D → Comunicação Controlador CNC',
    flowEn: 'CAD / NCP Files → Geometric & Trigonometric Calculus → 3D GUI Display → CNC Controller Live Bridge',
    githubUrl: 'https://github.com/danielsilvaengpt/Python-CNC-Modelling-Controller',
    typePt: 'Software Industrial (OPTIMA)',
    typeEn: 'Industrial Software (OPTIMA)',
  },
]
