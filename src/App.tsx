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
import { LatentMeshCanvas } from './components/ui/LatentMeshCanvas'
import { SectionTransition } from './components/ui/SectionTransition'

function PortfolioContent() {
  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-text-primary selection:text-bg relative">
      {/* Swiss Precision Latent Vector Mesh (Three.js WebGL) */}
      <LatentMeshCanvas />

      <div className="relative z-10">
        <Navbar />

        <main role="main">
          {/* 01. Hero Section */}
          <Hero />

          <SectionTransition glyph="◈" label="about" />

          {/* 02. About Section */}
          <About />

          <SectionTransition glyph="◈" label="experience" />

          {/* 03. Experience Section */}
          <Experience />

          <SectionTransition glyph="◈" label="projects" />

          {/* 04. Projects Section */}
          <Projects />

          <SectionTransition glyph="◈" label="skills" />

          {/* 05. Skills Section */}
          <Skills />

          <SectionTransition glyph="◈" label="education" />

          {/* 06. Education & Honors Section */}
          <Education />

          <SectionTransition glyph="◈" label="contact" />

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
