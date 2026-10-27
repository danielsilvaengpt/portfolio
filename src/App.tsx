import { ThemeProvider } from './hooks/useTheme'
import { I18nProvider, useI18n } from './hooks/useI18n'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { SectionLabel } from './components/ui/SectionLabel'
import { Tag } from './components/ui/Tag'
import { Mail } from 'lucide-react'

// Custom SVGs for standard GitHub and LinkedIn icons
function GithubIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function LinkedinIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

function PortfolioContent() {
  const { lang } = useI18n()

  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-text-primary selection:text-bg">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <SectionLabel index="03" label={lang === 'pt' ? 'Projetos' : 'Projects'} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 border border-border rounded-lg bg-bg-subtle hover:border-border-hover transition-colors">
            <span className="font-mono text-xs text-text-tertiary">AI · RAG</span>
            <h3 className="font-bold text-lg mt-1 mb-2">IndustrIA</h3>
            <p className="text-text-secondary text-xs font-mono">
              Q&A com RAG para manuais de manutenção industrial.
            </p>
          </div>
          <div className="p-6 border border-border rounded-lg bg-bg-subtle hover:border-border-hover transition-colors">
            <span className="font-mono text-xs text-text-tertiary">Deep Learning</span>
            <h3 className="font-bold text-lg mt-1 mb-2">DermoScan AI</h3>
            <p className="text-text-secondary text-xs font-mono">
              Classificação de lesões de pele com MobileNetV2 e Streamlit.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <SectionLabel index="04" label="Skills" />
        <div className="flex flex-wrap gap-2">
          <Tag>Python</Tag>
          <Tag>PostgreSQL</Tag>
          <Tag>pgvector</Tag>
          <Tag>Power BI</Tag>
          <Tag>FastAPI</Tag>
          <Tag>Streamlit</Tag>
        </div>
      </section>

      <section id="education" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <SectionLabel index="05" label={lang === 'pt' ? 'Educação' : 'Education'} />
        <div className="font-mono text-sm text-text-secondary">
          <p className="font-bold text-text-primary">ISEC — Licenciatura em Engenharia Informática</p>
          <p className="text-xs text-text-tertiary">2023 – 2026 · Sistemas de Informação</p>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-border mb-12">
        <SectionLabel index="06" label={lang === 'pt' ? 'Contacto' : 'Contact'} />
        <a
          href="mailto:danielsilva.eng.pt@gmail.com"
          className="text-xl md:text-3xl font-mono text-text-primary hover:underline underline-offset-8"
        >
          danielsilva.eng.pt@gmail.com
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-tertiary">
          <span>Daniel Silva · 2026</span>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/danielsilvaengpt"
              target="_blank"
              rel="noreferrer"
              className="hover:text-text-primary transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-silva-eng-pt/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-text-primary transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a
              href="mailto:danielsilva.eng.pt@gmail.com"
              className="hover:text-text-primary transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
          </div>
        </div>
      </footer>
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
