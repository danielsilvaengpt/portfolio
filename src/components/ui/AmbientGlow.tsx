import React from 'react'

export const AmbientGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top Center Volumetric Blue Radial Glow */}
      <div
        className="absolute -top-[25%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full opacity-35 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, #2563EB 0%, #1D4ED8 35%, transparent 70%)',
        }}
      />

      {/* Middle Subtle Cyan/Indigo Glow */}
      <div
        className="absolute top-[45%] -right-[15%] w-[650px] h-[450px] rounded-full opacity-20 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #0EA5E9 0%, #3B82F6 40%, transparent 70%)',
        }}
      />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
    </div>
  )
}
