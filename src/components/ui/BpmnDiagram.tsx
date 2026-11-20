import React, { useEffect, useState } from 'react'

export const BpmnDiagram: React.FC = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReducedMotion) {
      setShouldAnimate(true)
    }
  }, [])

  const tooltips: Record<string, string> = {
    docs: 'Ingestão de manuais técnicos industriais, documentação de processos e PDFs não estruturados.',
    embeddings: 'Conversão semântica em vetores densos (modelo all-MiniLM-L6-v2 / OpenAI) com chunking adaptativo.',
    pgvector: 'Base relacional PostgreSQL com extensão pgvector para cálculo de similaridade de cosseno a alta velocidade.',
    hybrid: 'Combinação determinística de BM25 (palavras-chave esparsas) com ranking semântico denso.',
    response: 'Contextualização em tempo real fornecida ao LLM para respostas sem alucinação e com citação direta.',
  }

  return (
    <div className="w-full my-6 bg-surface border border-rule p-4 sm:p-6" role="region" aria-label="Diagrama de fluxo do sistema">
      {/* Screen-reader accessible transcript */}
      <ol className="sr-only">
        <li>Início do processo</li>
        <li>Documentos técnicos ou manuais (Entrada)</li>
        <li>Geração de Embeddings vetoriais</li>
        <li>Armazenamento e indexação em base de dados vetorial pgvector</li>
        <li>Decisão: Pesquisa híbrida (semântica densa combinada com palavras-chave esparsas)?</li>
        <li>Resposta contextualizada com referências ao documento original</li>
        <li>Fim do fluxo</li>
      </ol>

      <div className="w-full overflow-x-auto relative">
        {/* Desktop and Tablet Flow: Horizontal BPMN (viewBox 0 0 1000 170) */}
        <svg
          viewBox="0 0 1000 170"
          className="w-full min-w-[700px] h-auto hidden sm:block"
          role="img"
          aria-labelledby="diagram-title diagram-desc"
        >
          <title id="diagram-title">Diagrama de processo: Pipeline RAG e Pesquisa Híbrida</title>
          <desc id="diagram-desc">
            Fluxo estilo BPMN ilustrando o processamento desde a ingestão de documentos até à geração de resposta com pgvector e pesquisa híbrida.
          </desc>

          <defs>
            <marker
              id="arrowhead"
              markerWidth="8"
              markerHeight="6"
              refX="7"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 8 3, 0 6" fill="var(--process)" />
            </marker>
            <style>
              {`
                .flow-arrow {
                  stroke: var(--process);
                  stroke-width: 1.5;
                  fill: none;
                  marker-end: url(#arrowhead);
                }
                .flow-animated {
                  stroke-dasharray: 200;
                  stroke-dashoffset: ${shouldAnimate ? '0' : '0'};
                  animation: ${shouldAnimate ? 'drawPath 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none'};
                }
                .node-interactive {
                  cursor: pointer;
                  transition: transform 0.15s ease, filter 0.15s ease;
                }
                .node-interactive:hover {
                  filter: brightness(0.96);
                }
                @keyframes drawPath {
                  from { stroke-dashoffset: 200; }
                  to { stroke-dashoffset: 0; }
                }
                @keyframes packetFlow {
                  0% { offset-distance: 0%; opacity: 0; }
                  15% { opacity: 1; }
                  85% { opacity: 1; }
                  100% { offset-distance: 100%; opacity: 0; }
                }
              `}
            </style>
          </defs>

          {/* 1. Start Event (Green Circle) */}
          <g className="node-interactive" onMouseEnter={() => setHoveredNode('start')} onMouseLeave={() => setHoveredNode(null)}>
            <circle cx="45" cy="85" r="18" fill="var(--paper)" stroke="var(--start)" strokeWidth="2" />
            <circle cx="45" cy="85" r="9" fill="var(--start)" className="animate-pulse" />
            <text x="45" y="125" textAnchor="middle" className="font-sans text-[12px] font-medium fill-ink-muted">Início</text>
          </g>

          {/* Flow 1 */}
          <path d="M 65 85 L 115 85" className="flow-arrow flow-animated" />

          {/* 2. Task: Documentos */}
          <g className="node-interactive" onMouseEnter={() => setHoveredNode('docs')} onMouseLeave={() => setHoveredNode(null)}>
            <rect x="120" y="55" width="130" height="60" rx="6" fill={hoveredNode === 'docs' ? 'var(--paper)' : 'var(--wash)'} stroke="var(--ink)" strokeWidth={hoveredNode === 'docs' ? 2 : 1.5} />
            <text x="185" y="83" textAnchor="middle" className="font-sans text-[13px] font-medium fill-ink">Documentos</text>
            <text x="185" y="99" textAnchor="middle" className="font-mono text-[11px] fill-ink-muted">PDF / Texto</text>
          </g>

          {/* Flow 2 */}
          <path d="M 250 85 L 305 85" className="flow-arrow flow-animated" />

          {/* 3. Task: Embeddings */}
          <g className="node-interactive" onMouseEnter={() => setHoveredNode('embeddings')} onMouseLeave={() => setHoveredNode(null)}>
            <rect x="310" y="55" width="130" height="60" rx="6" fill={hoveredNode === 'embeddings' ? 'var(--paper)' : 'var(--wash)'} stroke="var(--ink)" strokeWidth={hoveredNode === 'embeddings' ? 2 : 1.5} />
            <text x="375" y="83" textAnchor="middle" className="font-sans text-[13px] font-medium fill-ink">Embeddings</text>
            <text x="375" y="99" textAnchor="middle" className="font-mono text-[11px] fill-ink-muted">Vetores Densos</text>
          </g>

          {/* Flow 3 */}
          <path d="M 440 85 L 495 85" className="flow-arrow flow-animated" />

          {/* 4. Task: pgvector */}
          <g className="node-interactive" onMouseEnter={() => setHoveredNode('pgvector')} onMouseLeave={() => setHoveredNode(null)}>
            <rect x="500" y="55" width="130" height="60" rx="6" fill={hoveredNode === 'pgvector' ? 'var(--paper)' : 'var(--wash)'} stroke="var(--ink)" strokeWidth={hoveredNode === 'pgvector' ? 2 : 1.5} />
            <text x="565" y="83" textAnchor="middle" className="font-sans text-[13px] font-medium fill-ink">pgvector</text>
            <text x="565" y="99" textAnchor="middle" className="font-mono text-[11px] fill-ink-muted">PostgreSQL</text>
          </g>

          {/* Flow 4 */}
          <path d="M 630 85 L 675 85" className="flow-arrow flow-animated" />

          {/* 5. Decision: Pesquisa Híbrida (Rhombus) */}
          <g className="node-interactive" onMouseEnter={() => setHoveredNode('hybrid')} onMouseLeave={() => setHoveredNode(null)}>
            <polygon points="720,45 765,85 720,125 675,85" fill="var(--decision)" stroke="var(--ink)" strokeWidth={hoveredNode === 'hybrid' ? 2.5 : 1.5} />
            <text x="720" y="82" textAnchor="middle" className="font-sans text-[11px] font-semibold fill-ink">Pesquisa</text>
            <text x="720" y="95" textAnchor="middle" className="font-sans text-[11px] font-semibold fill-ink">híbrida?</text>
          </g>

          {/* Flow 5 */}
          <path d="M 765 85 L 815 85" className="flow-arrow flow-animated" />

          {/* 6. Task: Resposta */}
          <g className="node-interactive" onMouseEnter={() => setHoveredNode('response')} onMouseLeave={() => setHoveredNode(null)}>
            <rect x="820" y="55" width="115" height="60" rx="6" fill={hoveredNode === 'response' ? 'var(--paper)' : 'var(--wash)'} stroke="var(--ink)" strokeWidth={hoveredNode === 'response' ? 2 : 1.5} />
            <text x="877" y="83" textAnchor="middle" className="font-sans text-[13px] font-medium fill-ink">Resposta</text>
            <text x="877" y="99" textAnchor="middle" className="font-mono text-[11px] fill-ink-muted">Contexto RAG</text>
          </g>

          {/* Flow 6 */}
          <path d="M 935 85 L 955 85" className="flow-arrow flow-animated" />

          {/* 7. End Event (Red Double Circle) */}
          <g className="node-interactive" onMouseEnter={() => setHoveredNode('end')} onMouseLeave={() => setHoveredNode(null)}>
            <circle cx="975" cy="85" r="17" fill="var(--paper)" stroke="var(--end)" strokeWidth="3" />
            <circle cx="975" cy="85" r="9" fill="var(--end)" />
            <text x="975" y="125" textAnchor="middle" className="font-sans text-[12px] font-medium fill-ink-muted">Fim</text>
          </g>
        </svg>

        {/* Mobile Flow (< 720px): Vertical BPMN Diagram */}
        <svg
          viewBox="0 0 280 570"
          className="w-full max-w-[280px] mx-auto h-auto block sm:hidden"
          role="img"
          aria-hidden="true"
        >
          {/* Start */}
          <circle cx="140" cy="30" r="16" fill="var(--paper)" stroke="var(--start)" strokeWidth="2" />
          <circle cx="140" cy="30" r="8" fill="var(--start)" className="animate-pulse" />

          {/* Arrow 1 */}
          <line x1="140" y1="46" x2="140" y2="76" stroke="var(--process)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

          {/* Task 1 */}
          <rect x="50" y="80" width="180" height="50" rx="6" fill="var(--wash)" stroke="var(--ink)" strokeWidth="1.5" />
          <text x="140" y="105" textAnchor="middle" className="font-sans text-[13px] font-medium fill-ink">Documentos</text>
          <text x="140" y="120" textAnchor="middle" className="font-mono text-[11px] fill-ink-muted">PDF / Manuais</text>

          {/* Arrow 2 */}
          <line x1="140" y1="130" x2="140" y2="160" stroke="var(--process)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

          {/* Task 2 */}
          <rect x="50" y="164" width="180" height="50" rx="6" fill="var(--wash)" stroke="var(--ink)" strokeWidth="1.5" />
          <text x="140" y="189" textAnchor="middle" className="font-sans text-[13px] font-medium fill-ink">Embeddings</text>
          <text x="140" y="204" textAnchor="middle" className="font-mono text-[11px] fill-ink-muted">Vetores Densos</text>

          {/* Arrow 3 */}
          <line x1="140" y1="214" x2="140" y2="244" stroke="var(--process)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

          {/* Task 3 */}
          <rect x="50" y="248" width="180" height="50" rx="6" fill="var(--wash)" stroke="var(--ink)" strokeWidth="1.5" />
          <text x="140" y="273" textAnchor="middle" className="font-sans text-[13px] font-medium fill-ink">pgvector</text>
          <text x="140" y="288" textAnchor="middle" className="font-mono text-[11px] fill-ink-muted">PostgreSQL</text>

          {/* Arrow 4 */}
          <line x1="140" y1="298" x2="140" y2="330" stroke="var(--process)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

          {/* Decision */}
          <polygon points="140,335 185,370 140,405 95,370" fill="var(--decision)" stroke="var(--ink)" strokeWidth="1.5" />
          <text x="140" y="367" textAnchor="middle" className="font-sans text-[11px] font-semibold fill-ink">Pesquisa</text>
          <text x="140" y="380" textAnchor="middle" className="font-sans text-[11px] font-semibold fill-ink">híbrida?</text>

          {/* Arrow 5 */}
          <line x1="140" y1="405" x2="140" y2="435" stroke="var(--process)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

          {/* Task 4 */}
          <rect x="50" y="440" width="180" height="50" rx="6" fill="var(--wash)" stroke="var(--ink)" strokeWidth="1.5" />
          <text x="140" y="465" textAnchor="middle" className="font-sans text-[13px] font-medium fill-ink">Resposta</text>
          <text x="140" y="480" textAnchor="middle" className="font-mono text-[11px] fill-ink-muted">Contexto RAG</text>

          {/* Arrow 6 */}
          <line x1="140" y1="490" x2="140" y2="520" stroke="var(--process)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

          {/* End */}
          <circle cx="140" cy="540" r="15" fill="var(--paper)" stroke="var(--end)" strokeWidth="3" />
          <circle cx="140" cy="540" r="7" fill="var(--end)" />
        </svg>
      </div>

      {/* Dynamic Telemetry / Tooltip Footer */}
      <div className="mt-3 pt-3 border-t border-rule text-xs font-mono text-ink-muted flex flex-col sm:flex-row items-baseline sm:items-center justify-between gap-1">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-start animate-ping" />
          <span>
            {hoveredNode && tooltips[hoveredNode]
              ? tooltips[hoveredNode]
              : 'FIG. 01 — FLUXO ARQUITETURAL DE PESQUISA HÍBRIDA (PASSE O RATO SOBRE OS NÓS)'}
          </span>
        </div>
        <span className="text-[11px] text-ink-muted hidden sm:inline tabular-nums">
          STATUS: ONLINE // 60 FPS
        </span>
      </div>
    </div>
  )
}
