import React, { useState, useEffect } from 'react'
import { Terminal, Cpu, Activity } from 'lucide-react'
import { useI18n } from '../../hooks/useI18n'

interface LogMessage {
  id: number
  agent: string
  actionPt: string
  actionEn: string
  latency: string
}

const AGENT_STREAM_LOGS: LogMessage[] = [
  {
    id: 1,
    agent: 'Orchestrator',
    actionPt: 'Iniciada sessão neural. Analisando intenção do visitante...',
    actionEn: 'Initialized neural session. Analyzing visitor intent...',
    latency: '12ms',
  },
  {
    id: 2,
    agent: 'VectorRetrieval',
    actionPt: 'Consultando índice pgvector: percurso & projetos de Daniel Silva...',
    actionEn: 'Querying pgvector index: Daniel Silva track record & models...',
    latency: '24ms',
  },
  {
    id: 3,
    agent: 'RAGPipeline',
    actionPt: 'Contexto injetado com sucesso. Arquitetura validada.',
    actionEn: 'Context injected successfully. Architecture validated.',
    latency: '8ms',
  },
  {
    id: 4,
    agent: 'AutonomousAgent',
    actionPt: 'Despachando barramento sináptico 3D de alta performance.',
    actionEn: 'Dispatching high-throughput 3D synaptic thread.',
    latency: '4ms',
  },
  {
    id: 5,
    agent: 'Evaluator',
    actionPt: 'Status do sistema: Operacional. Zero anomalias.',
    actionEn: 'System status: Operational. Zero latency bottlenecks.',
    latency: '6ms',
  },
]

export const AgentThoughtStream: React.FC = () => {
  const { lang } = useI18n()
  const [currentIdx, setCurrentIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % AGENT_STREAM_LOGS.length)
    }, 3800)
    return () => clearInterval(timer)
  }, [])

  const currentLog = AGENT_STREAM_LOGS[currentIdx]

  return (
    <div className="w-full max-w-xl p-3.5 rounded-lg border border-border/80 bg-bg-subtle/80 backdrop-blur-md font-mono text-xs shadow-2xl relative overflow-hidden group">
      {/* Subtle top scanline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-pulse" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-border/60 text-[10px] text-text-tertiary">
        <div className="flex items-center gap-2">
          <Terminal className="w-3 h-3 text-text-secondary" />
          <span className="uppercase tracking-wider font-semibold text-text-secondary">
            AUTONOMOUS AGENT RUNTIME
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-emerald-500">
            <Activity className="w-3 h-3 animate-pulse" /> ACTIVE
          </span>
          <span className="hidden sm:inline">LATENCY // {currentLog.latency}</span>
        </div>
      </div>

      {/* Dynamic agent stream message */}
      <div className="flex items-start gap-2.5">
        <Cpu className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[10px] uppercase font-bold text-text-primary px-1.5 py-0.2 rounded bg-border/40">
              @{currentLog.agent}
            </span>
            <span className="text-[9px] text-text-tertiary">
              CYCLE #{currentLog.id}.0
            </span>
          </div>
          <p className="text-text-secondary text-[11px] leading-relaxed transition-all duration-300">
            {lang === 'pt' ? currentLog.actionPt : currentLog.actionEn}
          </p>
        </div>
      </div>

      {/* Bottom progress ticks */}
      <div className="mt-3 pt-2 border-t border-border/40 flex items-center justify-between text-[9px] text-text-tertiary">
        <div className="flex gap-1">
          {AGENT_STREAM_LOGS.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === currentIdx ? 'w-4 bg-accent' : 'w-1.5 bg-border'
              }`}
            />
          ))}
        </div>
        <span>OODA LOOP · ACTIVE</span>
      </div>
    </div>
  )
}
