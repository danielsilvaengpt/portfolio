import { ThemeProvider } from './hooks/useTheme'
import { I18nProvider } from './hooks/useI18n'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Education } from './components/sections/Education'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/layout/Footer'
import { SynapticCanvas } from './components/ui/SynapticCanvas'
import { CinematicOverlay } from './components/ui/CinematicOverlay'

function PortfolioContent() {
  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-text-primary selection:text-bg relative">
      {/* Cinematic Film Grain, Reticle Cursor & Telemetry */}
      <CinematicOverlay />

      {/* Continuous 3D Synaptic Thread (Three.js WebGL) */}
      <SynapticCanvas />

      <div className="relative z-10">
        <Navbar />

        <main role="main">
          {/* 01. Hero Section */}
          <Hero />

          {/* 02. About Section */}
          <About />

          {/* 03. Experience Section */}
          <Experience />

          {/* 04. Projects Section */}
          <Projects />

          {/* 05. Skills Section */}
          <Skills />

          {/* 06. Education & Honors Section */}
          <Education />

          {/* 07. Contact Section */}
          <Contact />
        </main>

        {/* 08. Minimalist Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <PortfolioContent />
      </I18nProvider>
    </ThemeProvider>
  )
}
