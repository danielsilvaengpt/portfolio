import { I18nProvider } from './hooks/useI18n'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Skills } from './components/sections/Skills'
import { Learning } from './components/sections/Learning'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/layout/Footer'
import { ProcessSpine } from './components/ui/ProcessSpine'

function PortfolioContent() {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-wash selection:text-ink relative">
      {/* Interactive Process Pipeline Spine connecting Header to Footer */}
      <ProcessSpine />

      <Navbar />

      <main id="main-content" role="main" className="relative z-10">
        {/* 1. Hero with interactive BPMN architecture diagram */}
        <Hero />

        {/* 2. Projects (Records / Data tables) */}
        <Projects />

        {/* 3. Experience and Education */}
        <Experience />

        {/* 4. Skills (Grouped by practical capabilities) */}
        <Skills />

        {/* 5. Currently Learning (Transparent roadmap) */}
        <Learning />

        {/* 6. Contact */}
        <Contact />
      </main>

      {/* 7. Semantic Footer */}
      <Footer />
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
