import React, { useState } from 'react'

export const BpmnDiagram: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  const tooltips: Record<string, string> = {
    docs: 'Ingestão de manuais técnicos industriais, documentação de processos e PDFs não estruturados.',
    embeddings: 'Conversão semântica em vetores densos (modelo all-MiniLM-L6-v2 / OpenAI) com chunking adaptativo.',
    pgvector: 'Base relacional PostgreSQL com extensão pgvector para cálculo de similaridade de cosseno a alta velocidade.',
    hybrid: 'Combinação determinística de BM25 (palavras-chave esparsas) com ranking semântico denso.',
    response: 'Contextualização em tempo real fornecida ao LLM para respostas sem alucinação e com citação direta.',
  }

  return (
    <div className="w-full my-8 rounded-card border border-border-subtle bg-dark-surface/60 backdrop-blur-md p-5 sm:p-7 shadow-card">
      <div className="w-full overflow-x-auto relative">
        {/* Desktop BPMN Flow */}
        <svg
          viewBox="0 0 1000 170"
          className="w-full min-w-[720px] h-auto hidden sm:block"
          role="img"
          aria-labelledby="diagram-title diagram-desc"
        >
          <title id="diagram-title">Diagrama de processo: Pipeline RAG e Pesquisa Híbrida</title>
          <desc id="diagram-desc">
            Fluxo estilo BPMN ilustrando o processamento desde a ingestão de documentos até à geração de resposta com pgvector e pesquisa híbrida.
          </desc>

          <defs>
            <marker
              id="arrowhead-dark"
              markerWidth="8"
              markerHeight="6"
              refX="7"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 8 3, 0 6" fill="#3B82F6" />
            </marker>

            <linearGradient id="taskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            <linearGradient id="decisionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
          </defs>

          {/* 1. Start Event */}
          <g className="cursor-pointer transition-transform duration-200 hover:scale-105" onMouseEnter={() => setHoveredNode('start')} onMouseLeave={() => setHoveredNode(null)}>
            <circle cx="45" cy="85" r="19" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
            <circle cx="45" cy="85" r="8" fill="#10B981" className="animate-pulse" />
            <text x="45" y="125" textAnchor="middle" className="font-mono text-[11px] font-medium fill-[#9CA3AF]">START</text>
          </g>

          {/* Flow 1 */}
          <path d="M 65 85 L 115 85" stroke="#3B82F6" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-dark)" />

          {/* 2. Task: Documentos */}
          <g className="cursor-pointer transition-all duration-200" onMouseEnter={() => setHoveredNode('docs')} onMouseLeave={() => setHoveredNode(null)}>
            <rect x="120" y="55" width="130" height="60" rx="8" fill="url(#taskGrad)" stroke={hoveredNode === 'docs' ? '#60A5FA' : '#334155'} strokeWidth={hoveredNode === 'docs' ? 2 : 1.5} />
            <text x="185" y="82" textAnchor="middle" className="font-sans text-[13px] font-semibold fill-[#F9FAFB]">Documentos</text>
            <text x="185" y="98" textAnchor="middle" className="font-mono text-[11px] fill-[#94A3B8]">PDF / Manuais</text>
          </g>

          {/* Flow 2 */}
          <path d="M 250 85 L 305 85" stroke="#3B82F6" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-dark)" />

          {/* 3. Task: Embeddings */}
          <g className="cursor-pointer transition-all duration-200" onMouseEnter={() => setHoveredNode('embeddings')} onMouseLeave={() => setHoveredNode(null)}>
            <rect x="310" y="55" width="130" height="60" rx="8" fill="url(#taskGrad)" stroke={hoveredNode === 'embeddings' ? '#60A5FA' : '#334155'} strokeWidth={hoveredNode === 'embeddings' ? 2 : 1.5} />
            <text x="375" y="82" textAnchor="middle" className="font-sans text-[13px] font-semibold fill-[#F9FAFB]">Embeddings</text>
            <text x="375" y="98" textAnchor="middle" className="font-mono text-[11px] fill-[#94A3B8]">Dense Vectors</text>
          </g>

          {/* Flow 3 */}
          <path d="M 440 85 L 495 85" stroke="#3B82F6" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-dark)" />

          {/* 4. Task: pgvector */}
          <g className="cursor-pointer transition-all duration-200" onMouseEnter={() => setHoveredNode('pgvector')} onMouseLeave={() => setHoveredNode(null)}>
            <rect x="500" y="55" width="130" height="60" rx="8" fill="url(#taskGrad)" stroke={hoveredNode === 'pgvector' ? '#60A5FA' : '#334155'} strokeWidth={hoveredNode === 'pgvector' ? 2 : 1.5} />
            <text x="565" y="82" textAnchor="middle" className="font-sans text-[13px] font-semibold fill-[#F9FAFB]">pgvector</text>
            <text x="565" y="98" textAnchor="middle" className="font-mono text-[11px] fill-[#94A3B8]">PostgreSQL</text>
          </g>

          {/* Flow 4 */}
          <path d="M 630 85 L 675 85" stroke="#3B82F6" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-dark)" />

          {/* 5. Decision: Pesquisa Híbrida */}
          <g className="cursor-pointer transition-all duration-200" onMouseEnter={() => setHoveredNode('hybrid')} onMouseLeave={() => setHoveredNode(null)}>
            <polygon points="720,45 765,85 720,125 675,85" fill="url(#decisionGrad)" stroke={hoveredNode === 'hybrid' ? '#FCD34D' : '#D97706'} strokeWidth={hoveredNode === 'hybrid' ? 2.5 : 1.5} />
            <text x="720" y="82" textAnchor="middle" className="font-sans text-[11px] font-bold fill-[#FEF3C7]">Pesquisa</text>
            <text x="720" y="95" textAnchor="middle" className="font-sans text-[11px] font-bold fill-[#FEF3C7]">híbrida?</text>
          </g>

          {/* Flow 5 */}
          <path d="M 765 85 L 815 85" stroke="#3B82F6" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-dark)" />

          {/* 6. Task: Resposta */}
          <g className="cursor-pointer transition-all duration-200" onMouseEnter={() => setHoveredNode('response')} onMouseLeave={() => setHoveredNode(null)}>
            <rect x="820" y="55" width="115" height="60" rx="8" fill="url(#taskGrad)" stroke={hoveredNode === 'response' ? '#60A5FA' : '#334155'} strokeWidth={hoveredNode === 'response' ? 2 : 1.5} />
            <text x="877" y="82" textAnchor="middle" className="font-sans text-[13px] font-semibold fill-[#F9FAFB]">Resposta</text>
            <text x="877" y="98" textAnchor="middle" className="font-mono text-[11px] fill-[#94A3B8]">Contexto RAG</text>
          </g>

          {/* Flow 6 */}
          <path d="M 935 85 L 955 85" stroke="#3B82F6" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-dark)" />

          {/* 7. End Event */}
          <g className="cursor-pointer transition-transform duration-200 hover:scale-105" onMouseEnter={() => setHoveredNode('end')} onMouseLeave={() => setHoveredNode(null)}>
            <circle cx="975" cy="85" r="18" fill="#450A0A" stroke="#EF4444" strokeWidth="2.5" />
            <circle cx="975" cy="85" r="9" fill="#EF4444" />
            <text x="975" y="125" textAnchor="middle" className="font-mono text-[11px] font-medium fill-[#9CA3AF]">END</text>
          </g>
        </svg>

        {/* Mobile Vertical Diagram */}
        <div className="sm:hidden flex flex-col gap-3 py-2 font-mono text-xs text-text-secondary">
          <div className="flex items-center gap-2 p-2 rounded bg-dark-elevated border border-border-subtle">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>01. Início ➔ Documentos Técnicos</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded bg-dark-elevated border border-border-subtle">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span>02. Embeddings Densos (pgvector)</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded bg-dark-elevated border border-border-subtle">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span>03. Pesquisa Híbrida (Dense + BM25)</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded bg-dark-elevated border border-border-subtle">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span>04. Geração Determinística RAG</span>
          </div>
        </div>
      </div>

      {/* Real-time Telemetry Bar */}
      <div className="mt-4 pt-4 border-t border-border-subtle text-xs font-mono flex flex-col sm:flex-row items-baseline sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-text-secondary">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
          <span className="text-text-primary">
            {hoveredNode && tooltips[hoveredNode]
              ? tooltips[hoveredNode]
              : 'ARQUITETURA RAG & PESQUISA HÍBRIDA // PASSE O RATO SOBRE OS NÓS'}
          </span>
        </div>
        <div className="text-[11px] text-text-tertiary">
          PGVECTOR · COSINE SIMILARITY · 60 FPS
        </div>
      </div>
    </div>
  )
}
