# MEMORY.md — Daniel Silva: Complete Portfolio Content

> ⚠️ Este ficheiro é a memória persistente do projeto. **Nunca apagar o changelog.**  
> Cada comando (`/phase`, `/problem`, `/new`, `/deploy`) grava aqui automaticamente.

---

## Changelog

### [2026-11-20 15:54] — REMOÇÃO DE PROJETOS INTERNOS DA GRELHA DE PROJETOS

**Action:** Remoção dos itens de trabalho interno da empresa Meight ("Pesquisa híbrida e embeddings vetoriais (Meight)" e "Ferramenta de onboarding operacional de clientes") da secção de Projetos Selecionados (`PROJECTS` em `src/data/projects.ts`), mantendo-os devidamente enquadrados na secção de Experiência Profissional (Estágio Curricular Meight). A grelha de projetos passa a focar os 5 projetos com repositórios autónomos e código aberto (Mise, CNC Controller, Business Process Modeling, BI Figueira da Foz, DermoScan AI).
**Status:** ✅ Complete | Build: PASS | Deploy: Ready for GitHub Pages & main push

---

### [2026-11-20 15:33] — DIREÇÃO A: DARK ENTERPRISE LUXURY / LINEAR STUDIO & ENCODING VERIFICATION

**Action:** Transição completa para o estilo **Direção A ("Dark Enterprise Luxury / Linear Studio")** e validação cirúrgica de encoding UTF-8 sem mojibake:
1. **Identidade Visual Dark Enterprise:**
   - Paleta obsidiana profunda: `--bg-base: #0B0F17`, `--bg-surface: #111827`, `--bg-elevated: #1F2937`, bordas subtis `rgba(255,255,255,0.08)` e glow azul primário `--brand-primary: #3B82F6`.
   - Malha de iluminação volumétrica ambiente (`AmbientGlow`): gradientes radiais ultra-suaves no topo e centro combinados com padrão de grelha milimétrica (`bg-grid-pattern`).
   - Cartões com luz especular dinâmica (`SpotlightCard`): efeito de foco luminoso suave a acompanhar o cursor do rato em tempo real (60 FPS) nas secções de Projetos, Experiência, Competências e Roadmap.
2. **Diagrama de Processo BPMN Dark Enterprise:**
   - Re-estilização completa com caixas gradiente (`#1E293B` para `#0F172A`), losango de decisão âmbar com anel pulsante, setas SVG vetorizadas com glow azul e rodapé com telemetria técnica interativa em tempo real.
3. **Hero & Foco Factual Impecável:**
   - Título e subtítulo: `Engenheiro Informático Júnior — IA, Sistemas de Informação & SAP` (UTF-8 limpo, BOM removido, sem qualquer mojibake).
   - Chip de disponibilidade: `DISPONÍVEL PARA CONTRATAÇÃO // AVEIRO, PT` com indicador verde pulsante.
   - Botões de ação com hover glow azul e descarregamento direto de CV.
4. **Projetos & Percurso:**
   - Grelha responsiva de projetos com spotlight cards, tech pills em JetBrains Mono e tags de arquitetura.
   - Secção de aprendizagem e roadmap com clarificação explícita do estado de estudo em SAP, IA Agêntica e Data Engineering.
5. **Verificação & Deploy:**
   - TypeScript build sem erros (`tsc -b && vite build` -> 0 errors, bundle 260KB JS / 50KB CSS).
   - Git commit e push para o repositório remoto `main` e deploy publicado no GitHub Pages (`gh-pages`).

**Status:** ✅ Complete | Build: PASS | Deploy: Live on GitHub Pages

---

### [2026-11-20 15:20] — RECURRENT ANIMATION SYSTEM: CONCEPT 1 "THE LIVE PIPELINE"

**Action:** Implementação do sistema de animação e estilo recorrente em todo o portfólio (Conceito 1 — "O Fio de Processo / The Live Pipeline"):
1. **Trilho Vertical Interativo (`ProcessSpine`):** Linha fina de 1px a percorrer o site de alto a baixo, preenchendo-se a azul `--process` conforme o utilizador faz scroll, com uma partícula de dados viva (`ping`) que percorre o trilho visual em tempo real.
2. **Nós de Estado BPMN em Todas as Secções (`SectionProcessNode`):** Cada secção encabeçada por um nó de notação BPMN com pulso suave e identificador de telemetria:
   - Hero: `01 // EXEC` [Início ●]
   - Projetos: `02 // BUILD` [Nó de Execução ▭]
   - Experiência: `03 // LOG` [Histórico Operacional ▭]
   - Competências: `04 // DATA` [Parâmetros Técnicos ⊞]
   - A aprender: `05 // ROADMAP` [Ponto de Decisão/Branching ◇]
   - Contacto: `06 // OUTPUT` [Fim do Processo / Ligação ◉]
3. **Diagrama BPMN Interativo com Tooltips Técnicos:** Os nós do diagrama no Hero agora reagem ao rato (`node-interactive`), exibindo telemetria em tempo real no rodapé do diagrama (explicações técnicas de chunking, pgvector, BM25 + dense re-ranking).
4. **Interação Especular nos Projetos:** Cada registo de projeto ativa uma borda esquerda de 2px a `--process` e fundo `--wash` ao passar o cursor, com código de projeto identificador `[meight-rag]`, `[mise-recipe-agents]`, etc.
5. **Harmonia Total:** Animações cirúrgicas, a 60 FPS, sem bibliotecas pesadas de terceiros nem artifícios sintéticos de IA.

**Status:** ✅ Complete | Build: PASS | Deploy: Ready for GitHub Pages & main push

---

### [2026-11-20 15:11] — FULL REDESIGN: PROCESS DIAGRAM SPEC V1.0 IMPLEMENTATION

**Action:** Implementação integral e sem desvios do `Spec.md` aprovado pelo utilizador ("O portfólio como um diagrama de processos"):
1. **Identidade Visual & Tokens:** Fundo técnico claro (`--paper: #F4F6F8`), superfície branca (`--surface: #FFFFFF`), lavanda de tarefa (`--wash: #E4EBF4`), texto tinta (`--ink: #17233A`), régua de 1px (`--rule: #C9D1DA`), azul de processo (`--process: #1B5FA6`), âmbar de decisão (`--decision: #F2C94C`), verde de início (`--start: #2F7A4B`) e vermelho de fim (`--end: #A83A32`).
2. **Tipografia Técnica:** IBM Plex Sans Condensed 600 nos títulos, IBM Plex Sans no corpo/interface e IBM Plex Mono no código e dados reais, com suporte local e `tabular-nums`.
3. **Hero & Diagrama BPMN Real:** Diagrama visual interativo inline SVG representando o pipeline real de RAG / Pesquisa Híbrida (`Documentos -> Embeddings -> pgvector -> Pesquisa híbrida? -> Resposta`) com versão horizontal para desktop e vertical empilhada para mobile (<720px), animação única de desenho do traço respeitando `prefers-reduced-motion` e lista acessível para leitores de ecrã (`.sr-only`).
4. **Projetos como Registos de Tabela:** Eliminados os cartões arredondados idênticos de IA; os projetos são agora apresentados como linhas estruturadas de documentação técnica com hover em `--wash`, links textuais sublinhados em `--process` (sem setas decorativas "→") e filtragem rigorosa por relevância.
5. **Experiência e Formação:** Lista cronológica simples com datas à esquerda em coluna alinhada (`tabular-nums`) e conteúdo à direita.
6. **Competências:** Agrupadas pelo que faz (Dados e IA, Sistemas e Processos, Backend e Web, Ferramentas & Fluxo) em texto limpo sem barras de percentagem.
7. **Secção A Aprender Agora:** Secção transparente e honesta refletindo o estado real de estudo de SAP, IA Agêntica e Engenharia de Dados.
8. **Purga da "Cara de IA":** Remoção total de fundos pretos genéricos, gradientes sintéticos, partículas 3D WebGL pesadas, animações excessivas de scroll, orbes de luz e cartões com sombras difusas.
9. **SEO & Acessibilidade:** JSON-LD `Person`, skip link, contrastes WCAG AA estritos, foco visível com offset e `<meta name="theme-color">` adaptativo.

**Status:** ✅ Complete | Build: PASS | Deploy: Ready for GitHub Pages & main push

---

### [2026-11-20 14:59] — CLARIFICATION: SAP TO BE STUDIED / FUTURE SPECIALIZATION PROGRESSION

**Action:** Especificação explícita de que a tecnologia/ecossistema SAP está em fase de início de estudo / progressão futura e não como competência já dominada.
**Files created / modified:**
- `src/components/sections/About.tsx`: Clarificado no texto que a especialização em SAP está em fase de início de estudo, certificação e preparação de fundações.
- `src/data/skills.ts`: Atualizado o item de skill para `SAP (início de estudo / progressão)`.
- `MEMORY.md` & `TASKS.md`: Documentação e changelog sincronizados com o repositório.

**Status:** ✅ Complete | Build: PASS | Deploy: Published to GitHub Pages & Remote `main`

---

### [2026-11-20 14:55] — FIX: ENCODING MOJIBAKE + ADD MISE-RECIPE-AGENTS + UPDATE ABOUT FOCUS

**Action:** Correção cirúrgica de caracteres corrompidos (mojibake) no Hero, atualização precisa do foco profissional na secção About e integração do novo projeto de IA Agêntica `danielsilvaengpt/mise-recipe-agents`.
**Files created / modified:**
- `src/components/sections/Hero.tsx`: Corrigido o encoding UTF-8 do badge e título profissional ("Engenheiro Informático Júnior — IA, Sistemas de Informação & SAP"), eliminando caracteres corrompidos (`InformÃ¡tico JÃºnior`).
- `src/components/sections/About.tsx`: Ajustado o texto final do objetivo: `"Foco atual: IA, pipelines de dados e fundações SAP."` / `"Current focus: AI, data pipelines, and SAP foundations."`.
- `index.html`: Atualizado o `<title>`, meta tags de descrição, Open Graph e Twitter Cards para refletir a nova identidade de IA, Sistemas de Informação & SAP.
- `src/locales/pt.json` & `src/locales/en.json`: Atualizados os papéis e taglines em ambas as línguas.
- `src/data/projects.ts`: Adicionado o projeto `Mise — Receitas com IA & Brigada Agêntica` com link para `https://github.com/danielsilvaengpt/mise-recipe-agents`, destacando a metodologia Agentic Vibe Coding, CDD e orquestração multi-agente (CrewAI / React 19).
- `src/components/sections/Projects.tsx`: Atualizada a frase introdutória dos projetos para refletir o novo portfólio de projetos selecionados.
- `MEMORY.md` & `TASKS.md`: Documentação atualizada e sincronizada com o repositório.

**Status:** ✅ Complete | Build: PASS | Deploy: Published to GitHub Pages & Remote `main`

---

### [2026-11-20 14:45] — PIVOT: AI, INFORMATION SYSTEMS & SAP + NEW BPM REPO PROJECT

**Action:** Ajustada a trajetória profissional e perfil do portfólio para posicionamento em **Inteligência Artificial, Sistemas de Informação e ERP/SAP (em aprendizagem)**, adicionando o projeto de Modelação de Processos de Negócio ligado ao GitHub.
**Files created / modified:**
- `src/data/projects.ts`: Adicionado projeto `Business Process Modeling` (BPMN, OML, fundações para ERP e Sistemas de Informação) com link direto para o repositório `danielsilvaengpt/Business-Process-Modeling`. Corrigido o encoding UTF-8 em todos os textos dos projetos.
- `src/data/skills.ts`: Adicionada a nova categoria `'erp-is'` (**ERP & SISTEMAS DE INFORMAÇÃO**) contendo `BPMN (Process Modeling)`, `OML / UML`, `ERP Foundations`, `SAP (em aprendizagem)`, `Business Process Analysis`, `Requirements Engineering` e `Information Systems Design`. Categoria passa a 5 grupos especializados.
- `src/components/sections/Skills.tsx`: Importado ícone `LayoutGrid`, mapeado para a categoria `'erp-is'` e adaptado o layout responsivo da grelha de skills para `xl:grid-cols-5`.
- `src/components/sections/Hero.tsx`: Badge mono atualizada para `DANIEL SILVA — IA · SISTEMAS DE INFORMAÇÃO · SAP 2026`, papel atualizado para `Engenheiro Informático Júnior — IA, Sistemas de Informação & SAP` e tagline atualizada para `"Da análise ao impacto."` / `"From analysis to impact."`.
- `src/components/sections/About.tsx`: Pull-quote e narrativa atualizadas para expressar a transição da engenharia industrial para IA, Sistemas de Informação e ERP com foco futuro na especialização em SAP.
- `src/components/ui/ParallaxTicker.tsx`: Integrados novos termos no ticker: `ERP & SAP`, `BPMN PROCESS MODELING`, `INFORMATION SYSTEMS`, `POWER BI · ANALYTICS`.
- `MEMORY.md` & `TASKS.md`: Documentação e changelog sincronizados com o repositório.

**Status:** ✅ Complete | Build: PASS | Deploy: Published to GitHub Pages & Remote `main`

---

### [2026-10-27 01:45] — CONCEPT 2: SWISS LATENT DIMENSION — Full Cinematic Upgrade

**Action:** Implementada a camada cinematográfica completa "Swiss Latent Dimension" (Concept 2) em todas as secções, de ponta a ponta.
**Files created / modified:**
- `src/components/ui/LatentMeshCanvas.tsx` (**UPGRADED**): adicionado `2D cursor comet trail` (canvas overlay), o cursor deixa um rasto luminoso suave; campo de partículas 26×26 com onda matemática; câmara Three.js viaja verticalmente com o scroll; data-packets na spline CatmullRom.
- `src/components/ui/SpotlightCard.tsx` (**NEW**): card com spotlight radial-gradient especular que segue o rato — aplicado em Projetos, Skills, Educação e WorldSkills.
- `src/components/ui/MaskedReveal.tsx` (**NEW**): texto oculto atrás de overflow-hidden que sobe ao entrar no viewport — aplicado no Hero (badge, nome, role, tagline) e About (blockquote).
- `src/components/ui/SectionTransition.tsx` (**NEW**): divisor animado entre secções — duas linhas que expandem do centro para os lados + glifo ◈ que faz pop-in; cria fluxo contínuo visual entre todas as 7 secções.
- `src/components/ui/ParallaxTicker.tsx` (**NEW**): marquee horizontal de keywords técnicas (AI/Agents/RAG/etc.) no Hero com parallax de scroll via Framer Motion `useScroll` + `useTransform`.
- `src/components/sections/Hero.tsx`: integra `MaskedReveal` + `ParallaxTicker` + `AgentThoughtStream`.
- `src/components/sections/About.tsx`: blockquote envolto em `MaskedReveal` para reveal cinematográfico.
- `src/components/sections/Skills.tsx`: cada coluna de competências usa `SpotlightCard`.
- `src/components/sections/Education.tsx`: cards de educação e award WorldSkills usam `SpotlightCard`.
- `src/App.tsx`: `SectionTransition` inserido entre cada par de secções consecutivas.

**Commit:** `daac937` — feat: Concept 2 Swiss Latent Dimension — full cinematic layer
**Status:** ✅ Complete | Build: PASS | Deploy: IN PROGRESS → GitHub Pages

---

### [2026-10-27 01:29] — CINEMATIC FILM DIRECTION — Site-Wide Continuous Cinematic Experience

**Action:** Implementada a experiência cinematográfica contínua de ponta a ponta (Ideia 1: *The Neural Chronology*), transformando o portfólio numa experiência interativa de filme de ficção científica.
**Files created / modified:**
- `src/components/ui/ScrambleText.tsx`: descodificador criptográfico em tempo real com caracteres matemáticos/binários (`01_#$<>[]/\\=+-*~XYZ{}ΔΛΞΠΣΩ`) que decifra o texto progressivamente ao entrar no ecrã (via IntersectionObserver) e reage interativamente ao passar o rato em todos os cabeçalhos e no nome central.
- `src/components/ui/CinematicOverlay.tsx`: overlay de película analógica 35mm cinematográfica com textura fractal, retícula de precisão personalizada de duplo anel magnético (cursor com inércia cinemática) e telemetria de voo nos cantos do ecrã (vetores X/Y e barra percentual de progresso contínuo de fotogramas).
- `src/components/ui/SynapticCanvas.tsx`: melhorado com física de ondas de choque holográficas tridimensionais acionadas ao clicar (`RingGeometry` com dissipação temporal), iluminação volumétrica com brilho aditivo nas partículas sinápticas e rotação cinematográfica da câmara com travelling parallax contínuo.
- `src/components/ui/SectionLabel.tsx`: rótulos de secções numerados integram agora o descodificador dinâmico `ScrambleText`.
- `src/components/sections/Hero.tsx`: nome massivo *Daniel Silva* decifra-se no arranque da página.
- `src/App.tsx`: integração sem emendas de todas as camadas cinematográficas.

**Decisions:**
- A integração do cursor com atraso inercial e telemetria fixa nos cantos do ecrã ancora o utilizador como operador de um sistema avançado de IA, elevando radicalmente a perceção de sofisticação técnica e distinção visual.

**Status:** ✅ Complete  
**Notes:** Validado por `npm run build` com sucesso absoluto.

### [2026-10-27 01:23] — CINEMATIC UPGRADE — Continuous 3D Synaptic Thread & Agent HUD

**Action:** Implementada a experiência cinemática interativa tridimensional contínua em Three.js WebGL e o console holográfico em tempo real "Agent Thought Stream".
**Files created / modified:**
- `package.json`: adicionado `three` e `@types/three`.
- `src/components/ui/SynapticCanvas.tsx`: motor 3D de alta performance WebGL (`PerspectiveCamera`, `CatmullRomCurve3` spline tridimensional com mais de 300 pontos de interpolação, 180 pulsos de luz sinápticos dinâmicos que viajam pela espinha dorsal do site, e núcleo esférico nodal no Hero que responde matematicamente à rotação temporal, ao scroll da página e à atração do cursor do rato).
- `src/components/ui/AgentThoughtStream.tsx`: HUD em tempo real simula o ciclo OODA de agentes autónomos com telemetria de latência (`12ms`), orquestrador de tarefas, injeção de contexto RAG e estado operacional de nós.
- `src/components/sections/Hero.tsx`: integrado o novo HUD e tipografia técnica de sistemas autónomos de IA.
- `src/App.tsx`: o `SynapticCanvas` foi renderizado como background unificado e contínuo da raiz ao rodapé.

**Decisions:**
- A linha spline tridimensional percorre a profundidade Z e altura Y da página inteira, reagindo suavemente à rolagem vertical do utilizador com amortecimento inercial (`dampening`).
- Paleta monocromática preservada com brilho aditivo no dark mode e sombreamento suave no light mode.

**Status:** ✅ Complete  
**Notes:** Validado por `npm run build` com sucesso absoluto.

### [2026-10-27 01:16] — /phase 13 — Performance, SEO & Accessibility Complete

**Action:** Configuração de todos os parâmetros de SEO, indexação, acessibilidade e partilha em redes sociais (Open Graph e Twitter Card).
**Files created / modified:**
- `index.html`: adicionadas metatags completas de SEO, descrição editorial, autor, keywords, canonical URL e cartões Open Graph (`og:image`, `og:title`, `og:description`, `og:type`) e Twitter Card (`summary_large_image`).
- `public/favicon.svg`: ícone de navegador customizado em SVG com monograma `DS` em alta definição.
- `public/robots.txt`: instruções padrão de rastreamento com referência ao sitemap.
- `public/sitemap.xml`: mapa do site indexável.
- `public/assets/img/og-image.jpg`: imagem de destaque de partilha social adicionada.

**Decisions:**
- A imagem de pré-visualização de partilha (`og-image.jpg`) e favicon personalizado garantem que links partilhados no LinkedIn, Twitter ou Slack apresentem um aspeto profissional e com identidade visual marcada.

**Status:** ✅ Complete  
**Notes:** Phase 13 concluída e validada pelo `npm run build`.

### [2026-10-27 01:13] — /phase 11 & /phase 12 — i18n Locales & Animations Polish Complete

**Action:** Estruturados os dicionários JSON de internacionalização (`src/locales/pt.json` e `src/locales/en.json`) e criados os utilitários padronizados de animação Framer Motion (`src/lib/animations.ts`) com respeito por acessibilidade e redução de movimento.
**Files created / modified:**
- `src/locales/pt.json` & `src/locales/en.json`: dicionários completos contendo strings para navbar, hero, sobre mim, contacto e rodapé.
- `src/hooks/useI18n.tsx`: enriquecido com a função de resolução recursiva de chaves `t(path: string)`.
- `src/lib/animations.ts`: variantes reutilizáveis de animação (`fadeUpVariant`, `fadeInVariant`, `slideLeftVariant`, `staggerContainerVariant`) calibradas com curva exponencial suave `[0.16, 1, 0.3, 1]`.

**Decisions:**
- O suporte a `prefers-reduced-motion` previne qualquer desconforto vestibular para utilizadores com sensibilidade a movimentos, desativando automaticamente deslocamentos em Y/X e mantendo apenas transições suaves de opacidade.

**Status:** ✅ Complete  
**Notes:** Fases 11 e 12 concluídas e validadas pelo `npm run build`.

### [2026-10-27 01:10] — /phase 9 & /phase 10 — Contact Section & Footer Complete

**Action:** Desenvolvida a secção de Contacto (com tipografia de alta escala para e-mail direto, botão de cópia com um clique para a área de transferência, disponibilidade imediata, links sociais e download de CVs) e o Rodapé minimalista com botão Back to Top.
**Files created / modified:**
- `src/components/sections/Contact.tsx`: canal direto sem formulários pesados com atrito. E-mail `danielsilva.eng.pt@gmail.com` em destaque massivo (`text-2xl sm:text-5xl font-bold`), botão interativo `Copiar` com feedback visual imediato (`Check` icon), badge pulsante de disponibilidade para contratação, nota de flexibilidade geográfica (Aveiro, presencial, híbrido ou remoto global), links para GitHub, LinkedIn e Email, e botões de download dos CVs em PT e EN.
- `src/components/layout/Footer.tsx`: rodapé editorial monocromático com monograma `DS`, assinatura autoral, tagline em itálico e botão de retorno ao topo com scroll suave (`window.scrollTo({ top: 0, behavior: 'smooth' })`).
- `src/App.tsx`: integração final dos componentes em estrutura semântica `<main role="main">` e `<footer>`.

**Decisions:**
- Eliminação intencional de formulários de contacto tradicionais, que reduzem a conversão. O e-mail direto de grande impacto com botão de cópia instantâneo oferece experiência sem atrito para recrutadores e tech leads.

**Status:** ✅ Complete  
**Notes:** Fases 9 e 10 concluídas e validadas pelo `npm run build`.

### [2026-10-27 01:07] — /phase 8 — Education Section Complete

**Action:** Desenvolvida a secção de Educação e Reconhecimento Académico/Profissional com divisão 7:5 (formação ISEC e Serafim Leite à esquerda; bloco dedicado à Medalha de Excelência WorldSkills Portugal 2023 à direita).
**Files created / modified:**
- `src/data/education.ts`: modelos tipados `EducationItem` e `AwardItem` com o percurso académico no ISEC (Licenciatura em Engenharia Informática, ramo Sistemas de Informação), diploma profissional e distinção WorldSkills.
- `src/components/sections/Education.tsx`: grelha assimétrica com metadados cronológicos, detalhes de formação técnica e callout card de prestígio nacional sem elementos visuais bregas, respeitando a paleta monocromática elegante.
- `src/App.tsx`: integração da nova secção `Education`.

**Decisions:**
- A Medalha de Excelência no WorldSkills recebe destaque lateral com moldura dedicada e badge de mérito nacional (`🏅 Medal of Excellence · WorldSkills Portugal 2023`), comunicando alta capacidade técnica de forma sóbria e imponente.

**Status:** ✅ Complete  
**Notes:** Phase 8 concluída e validada pelo `npm run build`.

### [2026-10-27 01:03] — /phase 7 — Skills Section Complete

**Action:** Desenvolvida a secção de Competências Técnicas dividida em 4 domínios de engenharia com layout responsivo de 4 colunas em grelha, tipografia mono e zero barras de percentagem.
**Files created / modified:**
- `src/data/skills.ts`: estrutura de dados `SKILL_CATEGORIES` abrangendo as 4 categorias principais: Linguagens (Python & SQL core), IA & Dados (RAG, Embeddings, ETL, ML, Power BI, Snowflake), Bases de Dados (PostgreSQL, pgvector, MySQL, SQL Server) e Ferramentas & Frameworks (FastAPI, Streamlit, Git/GitHub, CAD 3D).
- `src/components/sections/Skills.tsx`: 4 colunas com cabeçalhos técnicos em mono, micro-ícones de domínio (`Terminal`, `Cpu`, `Database`, `Wrench`), marcadores de pontos reativos e badges `Core` para competências nucleares.
- `src/App.tsx`: integração da nova secção `Skills`.

**Decisions:**
- Eliminação completa de barras de percentagem arbitrárias que denotam amadorismo. A proficiência técnica é expressa pela clareza do escopo de domínio e ênfase nas tecnologias nucleares (`Core`).

**Status:** ✅ Complete  
**Notes:** Phase 7 concluída e validada pelo `npm run build`.

### [2026-10-27 00:58] — /phase 6 — Projects Section Complete

**Action:** Desenvolvida a secção de Projetos com os 5 projetos reais estruturados em cartões de grelha 2-colunas, animação de entrada com Framer Motion, drawer de expansão de fluxo de arquitetura/pipeline de dados e links externos dinâmicos (GitHub e Live Demo Streamlit).
**Files created / modified:**
- `src/data/projects.ts`: modelo tipado `ProjectItem` com os 5 projetos reais (IndustrIA RAG, BI Porto Figueira da Foz Snowflake, DermoScan AI Deep Learning, WaterWise Calculator Erasmus+, Python CNC Controller OPTIMA).
- `src/components/sections/Projects.tsx`: grelha minimalista de cartões com índice numérico `01 //`, cabeçalho de categoria, título e tagline, descrição detalhada, visualizador interativo em acordeão de pipelines de dados (`Layers` e `GitBranch`), pills de stack tecnológico e links com seta animada 45° em hover (`ArrowUpRight`).
- `src/App.tsx`: integração da nova secção `Projects`.

**Decisions:**
- Os fluxos de dados/arquitetura são inspecionáveis a pedido pelo utilizador via botão discreto, mantendo a limpeza estética do cartão por defeito.
- A demonstração interativa do DermoScan AI no Streamlit foi associada ao botão direto `Demonstração / Live Demo`.

**Status:** ✅ Complete  
**Notes:** Phase 6 concluída e validada pelo `npm run build`.

### [2026-10-27 00:54] — /phase 5 — Experience Section Complete

**Action:** Desenvolvida a secção de Experiência com linha de tempo vertical minimalista, dados bilingues estruturados dos 4 estágios e animação escalonada lateral via Framer Motion.
**Files created / modified:**
- `src/data/experience.ts`: modelo tipado `ExperienceItem` com todas as 4 experiências profissionais reais (Meight em IA/Hybrid Search, Erasmus+ em Espanha no WaterWise, OPTIMA em software CNC trigonométrico e OPTIMA em hardware industrial).
- `src/components/sections/Experience.tsx`: timeline com linha contínua hairline, nós circulares reativos (`group-hover:scale-125 group-hover:bg-accent`), cabeçalhos com função, empresa, localização geográfica e período, marcadores de tarefas e pills de tecnologias usadas.
- `src/App.tsx`: integração da nova secção `Experience`.

**Decisions:**
- Ordenação estritamente cronológica decrescente (da mais recente de 2026 até ao primeiro estágio em 2022).
- Os nós da timeline mantêm-se discretos por defeito e ganham destaque e brilho suave ao focar ou passar com o cursor em cada bloco de experiência.

**Status:** ✅ Complete  
**Notes:** Phase 5 concluída e validada pelo `npm run build`.

### [2026-10-27 00:51] — /phase 4 — About Section Complete

**Action:** Desenvolvida a secção Sobre Mim com layout editorial assimétrico, citação pull-quote, grelha técnica de factoids e tratamento fotográfico com hover interativo. Descarregados os assets originais (foto de perfil e CVs em PDF).
**Files created / modified:**
- `src/components/sections/About.tsx`: layout assimétrico (7 cols texto / 5 cols foto), com bloco de citação editorial, dois parágrafos focados na transição do meio industrial para IA e dados, grelha com 5 factoids (Localização, Estado, Formação ISEC, Distinção WorldSkills, Idiomas), e frame fotográfica `FIG. 01` com transição grayscale para cor em hover.
- `public/assets/img/daniel.jpg`: imagem de perfil original importada.
- `public/assets/cv/Daniel_Silva_CV_PT.pdf` & `Daniel_Silva_CV_EN.pdf`: currículos originais em PDF importados para download direto.
- `src/App.tsx`: substituição do stub pela secção `About` interativa.

**Decisions:**
- A imagem utiliza filtro em tons de cinza suave por defeito que revela a cor natural suavemente (`transition-all duration-700 ease-out`) ao passar o rato, trazendo sofisticação e reduzindo a saturação visual.
- A grelha técnica de factoids organiza credenciais-chave (WorldSkills, ISEC, Status) de forma imediata e legível para recrutadores.

**Status:** ✅ Complete  
**Notes:** Phase 4 concluída e validada pelo `npm run build`.

### [2026-10-27 00:46] — /phase 3 — Hero Section Complete

**Action:** Desenvolvida a secção Hero de alto impacto tipográfico editorial utilizando Framer Motion e suporte a acessibilidade (reduced motion).
**Files created / modified:**
- `src/components/sections/Hero.tsx`: secção Hero em ecrã inteiro (`100svh`), com pré-título mono, nome em escala massiva (`clamp(3rem, 10vw, 8rem)`), subtítulo profissional, tagline em itálico, botões de ação (Download CV com ícone, Scroll até ao percurso), e indicador de scroll inferior com coordenadas geográficas de Aveiro.
- `src/App.tsx`: integração do novo componente `Hero`.
- Animações escalonadas (`stagger`) com curvas suaves (`easeOut`) e respeito automático por utilizadores com preferência por movimento reduzido.

**Decisions:**
- Zero poluição visual ou canvas 3D no fundo — a tipografia com tracking negativo e espaçamentos generosos comanda toda a presença da página.
- Download CV aponta para caminhos relativos dos PDFs bilingues.

**Status:** ✅ Complete  
**Notes:** Phase 3 concluída e validada pelo `npm run build`.

### [2026-10-27 00:44] — /phase 1 & /phase 2 — Base UI & Navbar Complete

**Action:** Desenvolvida toda a infraestrutura da Fase 1 (Design Tokens, ThemeContext, I18nContext, componentes base UI) e da Fase 2 (Navbar responsivo completo).
**Files created / modified:**
- `src/hooks/useTheme.tsx`: hook e provider para alternância dark/light persistente em `localStorage` e atribuição de classes no `<html>`.
- `src/hooks/useI18n.tsx`: hook e provider para bilinguismo PT/EN com persistência.
- `src/components/ui/SectionLabel.tsx`: marcador numerado `[01]` minimalista com régua hairline.
- `src/components/ui/Tag.tsx`: pill com hairline border no formato clean.
- `src/components/ui/Button.tsx`: botão minimalista nos variantes `outline`, `ghost` e `solid`.
- `src/components/ui/ThemeToggle.tsx`: botão animado com ícones `Sun`/`Moon` de 18px.
- `src/components/ui/LangToggle.tsx`: seletor minimalista PT / EN.
- `src/components/layout/Navbar.tsx`: barra de navegação responsiva com monograma `DS`, scroll-detect com blur translúcido, deteção de secção ativa em scroll, e overlay fullscreen no mobile.
- `src/App.tsx`: integração e pré-visualização completa com todas as secções estruturadas.

**Decisions:**
- O Navbar utiliza blur com backdrop filter suave (`bg-bg/85 backdrop-blur-md`) e hairline border inferior ao fazer scroll.
- No mobile, o menu fecha automaticamente ao navegar para qualquer secção e bloqueia o scroll de fundo quando aberto.
- O ThemeToggle respeita o default dark mode solicitado pelo utilizador.

**Status:** ✅ Complete  
**Notes:** Fases 1 e 2 concluídas com sucesso e validadas pelo `npm run build`.

### [2026-10-27 00:38] — /phase 0 — Project Setup Complete

**Action:** Inicializado o projeto React 19 + TypeScript + Vite 8. Instaladas e configuradas as dependências de base, styling e animação.
**Files created / modified:**
- `package.json`: dependências adicionadas (`tailwindcss`, `postcss`, `autoprefixer`, `gh-pages`, `framer-motion`, `lucide-react`, `@fontsource/inter`, `@fontsource/jetbrains-mono`, `react-intersection-observer`, `clsx`, `tailwind-merge`) e scripts configurados (`deploy`, `build`)
- `vite.config.ts`: configurado `base: '/portfolio/'` para GitHub Pages
- `tailwind.config.ts`: estendido com as CSS variables do design system (`bg`, `border`, `text`, `accent`), fontes `Inter` e `JetBrains Mono`
- `src/styles/globals.css`: tokens CSS custom properties para dark e light mode importando as fontes
- `src/lib/utils.ts`: helper `cn()` com `clsx` e `tailwind-merge`
- Diretórios criados: `src/components/layout`, `src/components/sections`, `src/components/ui`, `src/data`, `src/hooks`, `src/styles`, `src/locales`, `src/lib`, `public/assets/cv`, `public/assets/img`
- Git inicializado com remote `https://github.com/danielsilvaengpt/portfolio.git` e commit inicial realizado

**Decisions:**
- Usou-se Tailwind CSS com CSS custom properties para garantir alternância instantânea entre temas dark/light sem flashes.
- Fontes auto-hospedadas via `@fontsource` para 0 round-trips externos e máxima performance.
- Testado `npm run build` com sucesso absoluto (saída limpa na pasta `dist/`).

**Status:** ✅ Complete  
**Notes:** Phase 0 totalmente concluída. Pronto para Phase 1 (Design Tokens & Base Components).

### [2026-10-27 00:28] — SETUP — Context files created

**Action:** Criados todos os ficheiros de contexto para o novo portfolio. Extraídos dados do portfolio antigo via GitHub raw HTML.  
**Files created:**
- `CLAUDE.md` — tech stack, estrutura, comandos, regras
- `MEMORY.md` — dados pessoais completos (este ficheiro)
- `DESIGN.md` — design system completo (paleta, tipografia, animações, blueprints)
- `TASKS.md` — 80+ tasks em 14 fases
- `ARCHITECTURE.md` — árvore de componentes, estado, i18n, deploy
- `MOODBOARD.md` — brief criativo, referências visuais, filosofia
- `COMMANDS.md` — referência dos slash commands
- `Portfolio/.agents/skills/portfolio-commands/SKILL.md` — skill ativo para /phase, /problem, /new, /deploy  

**Decisions:**
- Stack: React 18 + Vite + TailwindCSS + Framer Motion
- Tema: Dark/Light toggle, default dark
- Cor de destaque: Monocromático (branco/prata) — sem cor de destaque colorida
- Secções: Hero, About, Experience, Projects, Skills, Education, Contact
- Fonte: Geist/Inter + Geist Mono/JetBrains Mono
- Deploy: GitHub Pages (`/portfolio/` base path)

**Status:** ✅ Complete — Pronto para começar a implementação  
**Notes:** Portfolio antigo em https://danielsilvaengpt.github.io/portfolio/ — consultar apenas para CONTEÚDO, nunca para design. A pasta local `c:\Users\danie\Desktop\Portfolio` está vazia — é o workspace do projeto novo.

---



> Single source of truth for all personal content. All text is bilingual (PT/EN). Do NOT invent data — use only what is here.

---

## 👤 Identity

| Field | Value |
|---|---|
| **Name** | Daniel Silva |
| **Location** | Aveiro, Portugal 🇵🇹 |
| **Role (PT)** | Engenheiro Informático Júnior — IA & Análise de Dados |
| **Role (EN)** | Junior Computer Engineer — AI & Data Analysis |
| **Tagline (PT)** | "Do metal aos dados." |
| **Tagline (EN)** | "From metal to data." |
| **Email** | danielsilva.eng.pt@gmail.com |
| **LinkedIn** | https://www.linkedin.com/in/daniel-silva-eng-pt/ |
| **GitHub** | https://github.com/danielsilvaengpt |
| **CV (PT)** | /assets/cv/Daniel_Silva_CV_PT.pdf |
| **CV (EN)** | /assets/cv/Daniel_Silva_CV_EN.pdf |
| **Profile photo** | /assets/img/daniel.jpg |

---

## 📝 Bio / About Me

### PT
> "Terminei Engenharia Informática no ISEC, no ramo de Sistemas de Informação. Passei por quatro estágios, um deles em Espanha com o Erasmus+, e ganhei a Medalha de Excelência em Desenvolvimento de Aplicações Móveis no WorldSkills Portugal 2023.
> Trabalhei com máquinas CNC e automação industrial e, pelo caminho, percebi que o que quero é trabalhar com dados e IA, como Data Analyst, Data/AI Engineer, ou Backend Python Developer."

### EN
> "I finished Computer Engineering at ISEC, in the Information Systems branch. I went through four internships, one of them in Spain with Erasmus+, and won the Medal of Excellence in Mobile Application Development at WorldSkills Portugal 2023.
> I worked with CNC machines and industrial automation and, along the way, realised that what I want is to work with data and AI, as a Data Analyst, Data/AI Engineer, or Backend Python Developer."

### Current Status
Seeking first professional role as: **Data Analyst · Data/AI Engineer · Backend Python Developer**

---

## 🛠 Skills

### Languages
- Python ⭐ (primary)
- SQL / PL/SQL ⭐ (primary)
- Java
- C++
- C
- PHP
- JavaScript

### Data & AI
- Data Analysis
- ETL (Extract, Transform, Load)
- Machine Learning
- Deep Learning / Transfer Learning
- Power BI
- Data Warehousing (Snowflake Schema)
- RAG (Retrieval-Augmented Generation)
- Embeddings / Vector Search

### Databases
- PostgreSQL + pgvector
- MySQL
- SQL Server

### Tools & Frameworks
- Git & GitHub
- Streamlit
- FastAPI
- AJAX / jQuery
- Fusion 360 (3D modelling)
- LaserGRBL

---

## 🚀 Projects

### 1. IndustrIA
- **Type:** Personal project
- **Category:** AI · RAG · LLM
- **Status:** In progress (no demo yet)
- **Description (PT):** Sistema de Q&A para manuais técnicos de manutenção industrial, usando arquitetura RAG. Os manuais chegam organizados de formas diferentes, por isso o desafio é extrair e organizar o conteúdo de diferentes fontes antes de responder a perguntas.
- **Description (EN):** A Q&A system for industrial maintenance technical manuals, using RAG (Retrieval-Augmented Generation) architecture. Manuals arrive organized in different ways, so the challenge is to extract and organize content from different sources before querying.
- **Stack:** Python · FastAPI · PostgreSQL · pgvector · LLM (Groq) · Embeddings (all-MiniLM-L6-v2)
- **Flow:** PDFs → Extraction & Chunking → Embeddings → PostgreSQL+pgvector (cosine similarity) → LLM (Groq) → FastAPI
- **GitHub:** https://github.com/danielsilvaengpt *(repo name TBD)*
- **Demo:** None (in progress)

### 2. BI do Porto Marítimo da Figueira da Foz
- **Type:** University group project
- **Category:** Data Engineering · BI · Power BI
- **Description (PT):** Data Mart em esquema Snowflake, alimentado por um ETL em Python, com dashboards Power BI para acompanhar KPIs de receita, eficiência operacional e desempenho da tripulação.
- **Description (EN):** Data Mart in Snowflake schema, fed by a Python ETL, with Power BI dashboards to track KPIs for revenue, operational efficiency and crew performance.
- **Stack:** Python · MySQL · SQL Server · CSV · Power BI · Snowflake Schema
- **Flow:** Simulated ERP (MySQL) + CSV → Python ETL → SQL Server Data Mart → Power BI (5 dashboards)
- **GitHub:** https://github.com/danielsilvaengpt/BI-FigueiradaFoz
- **Demo:** None (Power BI report)

### 3. DermoScan AI — Skin Disease Classifier
- **Type:** University group project
- **Category:** Deep Learning · Computer Vision
- **Description (PT):** Classificador de doenças de pele usando Transfer Learning com MobileNetV2. Atingiu 72% de precisão. Dataset do Kaggle.
- **Description (EN):** Skin disease classifier using Transfer Learning with MobileNetV2. Achieved 72% accuracy. Dataset from Kaggle (skin diseases).
- **Stack:** Python · Deep Learning · MobileNetV2 · Streamlit
- **Flow:** Image (skin lesion) → MobileNetV2 (Transfer Learning) → Random Search (hyperparameter optimization) → Streamlit app
- **GitHub:** https://github.com/danielsilvaengpt/skin-disease-classifier
- **Demo:** https://dermoscanai.streamlit.app/

### 4. WaterWise Calculator
- **Type:** Erasmus+ solo project
- **Category:** Full-stack Web
- **Description (PT):** App web para calcular a pegada hídrica, pensada para qualquer pessoa. O utilizador constrói uma lista de alimentos, cada um com o seu consumo de água (em ml), e a app totaliza tudo. Criada a solo durante o estágio Erasmus+ em Málaga, com atualizações de dados em tempo real e layout responsivo.
- **Description (EN):** Web app to calculate the water footprint, designed for anyone. The user builds a list of foods, each with their water consumption (in ml), and the app totals it. Built solo during Erasmus+ internship in Málaga, with real-time data updates and responsive layout.
- **Stack:** PHP · MySQL · AJAX · jQuery · CSS3
- **Flow:** Interface (jQuery & CSS3) → AJAX (real-time) → PHP → MySQL
- **GitHub:** https://github.com/danielsilvaengpt/WaterWise-Calculator
- **Demo:** None

### 5. Python CNC Modelling Controller
- **Type:** Curricular internship project (OPTIMA)
- **Category:** Industrial Automation · Python
- **Description (PT):** Software criado de raiz durante o estágio na OPTIMA para controlar uma máquina de modelação 3D por pinos. O utilizador importa um ficheiro CAD, o software mostra o objeto numa grelha 3D e permite correr a máquina, vendo tudo acontecer em tempo real.
- **Description (EN):** Software built from scratch during the OPTIMA internship to control a 3D pin modelling machine — the pins rise to shape the object. The user imports a CAD file, the software shows the object on a 3D grid and allows the machine to run, seeing everything happen in real time.
- **Stack:** Python · GUI · Trigonometry · Euclidean Geometry
- **Flow:** CAD & NCP files → Python calculations (trigonometry & geometry) → Graphical interface (3D grid) → CNC Controller (real-time)
- **GitHub:** https://github.com/danielsilvaengpt/Python-CNC-Modelling-Controller
- **Demo:** None (hardware-specific)
- **Note:** Repository is a logic demonstration — specific hardware parts removed for confidentiality.

---

## 💼 Experience

### 1. AI Engineer Intern · Meight, Aveiro
- **Period:** Feb 2026 – Jun 2026
- **Type:** Curricular internship
- **Tasks (EN):**
  - Part of the data team on the Hybrid Search project; analysed existing implementation and suggested improvements for information retrieval (Python).
  - Tested and compared different search approaches: Keyword Search, Embeddings Search, Hybrid Search. Experimented with Flat Text improvements.
  - Created an internal project to help with new client onboarding, simplifying registration and better organising client-specific processes.

### 2. Full-Stack Web Developer Intern · Internet Web Solutions, Málaga, Spain 🇪🇸
- **Period:** Apr 2023 – May 2023
- **Type:** Erasmus+ internship
- **Tasks (EN):**
  - Developed solo the WaterWise app to calculate water footprint, with PHP and MySQL.
  - Used AJAX and jQuery to process data in real time, making the interface more dynamic.
  - Handled responsive layout and CSS3 animations, focusing on user experience.

### 3. Software Developer Intern · OPTIMA – Equipamentos CNC, Aveiro
- **Period:** Apr 2023 – Jun 2023
- **Type:** Curricular internship
- **Tasks (EN):**
  - Built from scratch a Python software to control a 3D modelling machine, with complex trigonometry and Euclidean geometry calculations.
  - Built the GUI and connected the program in real time to the CNC controller, reading log and NCP files.
  - Tested everything directly on the machine to ensure it worked under real conditions.

### 4. IT & Hardware Technician Intern · OPTIMA – Equipamentos CNC, Aveiro
- **Period:** Jun 2022 – Jul 2022
- **Type:** Curricular internship
- **Tasks (EN):**
  - Configured, calibrated and operated 3D printers and scanners (Calibry), and modelled technical parts in Fusion 360.
  - Provided technical support in an industrial environment, including calibrating laser cutting machines with clients (LaserGRBL).
  - Started working with Python automation and Cartesian axis logic (XYZ).

---

## 🎓 Education

### BSc Computer Engineering, Information Systems
- **Institution:** Instituto Superior de Engenharia de Coimbra (ISEC)
- **Period:** 2023 – 2026
- **PT:** Licenciatura em Engenharia Informática, ramo de Sistemas de Informação

### Technical Diploma in IT Management & Programming
- **Institution:** Escola Secundária Dr. Serafim Leite
- **Period:** 2020 – 2023
- **PT:** Técnico de Gestão e Programação de Sistemas Informáticos

### 🏅 Award
- **Medal of Excellence** — WorldSkills Portugal 2023
- Discipline: Mobile Application Development (national level)

---

## 🔗 All Links

| Label | URL |
|---|---|
| Live Portfolio | https://danielsilvaengpt.github.io/portfolio/ |
| GitHub Profile | https://github.com/danielsilvaengpt |
| LinkedIn | https://www.linkedin.com/in/daniel-silva-eng-pt/ |
| DermoScan AI Demo | https://dermoscanai.streamlit.app/ |
| Project: BI Figueira da Foz | https://github.com/danielsilvaengpt/BI-FigueiradaFoz |
| Project: Skin Classifier | https://github.com/danielsilvaengpt/skin-disease-classifier |
| Project: WaterWise | https://github.com/danielsilvaengpt/WaterWise-Calculator |
| Project: CNC Controller | https://github.com/danielsilvaengpt/Python-CNC-Modelling-Controller |
| CV (PT) | /assets/cv/Daniel_Silva_CV_PT.pdf |
| CV (EN) | /assets/cv/Daniel_Silva_CV_EN.pdf |
