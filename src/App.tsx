import { I18nProvider } from './hooks/useI18n'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Skills } from './components/sections/Skills'
import { Learning } from './components/sections/Learning'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/layout/Footer'
import { AmbientGlow } from './components/ui/AmbientGlow'

function PortfolioContent() {
  return (
    <div className="min-h-screen bg-dark-base text-text-primary selection:bg-brand-primary selection:text-white relative">
      {/* Volumetric Studio Ambient Glow & Blueprint Grid */}
      <AmbientGlow />

      <div className="relative z-10">
        <Navbar />

        <main id="main-content" role="main">
          {/* 1. Hero with BPMN Diagram */}
          <Hero />

          {/* 2. Projects (Specular Spotlight Cards) */}
          <Projects />

          {/* 3. Experience & Education Timeline */}
          <Experience />

          {/* 4. Skills (Domain Grid) */}
          <Skills />

          {/* 5. Currently Learning (Roadmap) */}
          <Learning />

          {/* 6. Contact */}
          <Contact />
        </main>

        {/* 7. Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <I18nProvider>
      <PortfolioContent />
    </I18nProvider>
  )
}
