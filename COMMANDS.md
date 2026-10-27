# COMMANDS.md — Portfolio Slash Command Reference

> Comandos rápidos para o desenvolvimento do portfolio. Em vez de escrever prompts longos, usa estes atalhos.  
> **Cada comando grava automaticamente no MEMORY.md changelog — nada se perde.**

---

## `/phase [número ou nome]`

**O que faz:** Executa uma fase completa do `TASKS.md` — instala dependências, cria ficheiros, escreve código.

```
/phase 0        → Phase 0: Project Setup (Vite + React + Tailwind)
/phase 1        → Phase 1: Design Tokens & Base
/phase 2        → Phase 2: Navbar
/phase 3        → Phase 3: Hero Section
/phase 4        → Phase 4: About Section
/phase 5        → Phase 5: Experience Section
/phase 6        → Phase 6: Projects Section
/phase 7        → Phase 7: Skills Section
/phase 8        → Phase 8: Education Section
/phase 9        → Phase 9: Contact Section
/phase 10       → Phase 10: Footer
/phase 11       → Phase 11: i18n (PT ↔ EN)
/phase 12       → Phase 12: Animations Polish
/phase 13       → Phase 13: Performance & Accessibility
/phase 14       → Phase 14: Deploy
/phase          → mostra estado de todas as fases (✅ / 🔄 / ⬜)
```

**O agente irá:**
1. Ler o `TASKS.md` e `MEMORY.md` para perceber o que já foi feito
2. Executar apenas as tasks ainda não concluídas `[ ]`
3. Marcar tasks como `[x]` ao concluir
4. Gravar no changelog do `MEMORY.md`

---

## `/problem [descrição]`

**O que faz:** Diagnostica e corrige um problema no código.

```
/problem o navbar não fecha no mobile depois de clicar num link
/problem o build falha com erro "cannot find module framer-motion"
/problem o hero section faz overflow em iPhone SE (375px)
/problem as animações não disparam quando faço scroll
/problem o tema dark/light não persiste ao recarregar a página
/problem         → pergunta a descrição do problema
```

**O agente irá:**
1. Verificar o `MEMORY.md` se o problema já foi encontrado antes
2. Ler os ficheiros afetados
3. Reproduzir e diagnosticar o problema
4. Explicar o root cause antes de corrigir
5. Aplicar a correção e verificar que funciona
6. Gravar no changelog do `MEMORY.md`

---

## `/new [descrição]`

**O que faz:** Implementa uma nova feature, mudança de design, ou adição de escopo.

```
/new adicionar um language switcher ao navbar
/new mudar a fonte do tagline do hero para italic serif
/new adicionar uma secção "currently reading" depois do contact
/new fazer os project cards mostrarem o flow diagram em hover
/new adicionar cursor personalizado em desktop
/new tornar o email do contact copiável com um click
/new adicionar transições de página entre secções
```

**O agente irá:**
1. Ler `MEMORY.md`, `DESIGN.md` e `CLAUDE.md` para contexto
2. **Descrever o plano** antes de implementar (pede confirmação se há dúvida)
3. Implementar a mudança
4. Atualizar `TASKS.md` se necessário
5. Gravar no changelog do `MEMORY.md`

> ⚠️ Se a mudança violar o design system (ex: adicionar uma cor que não existe na paleta), o agente avisa antes de prosseguir.

---

## `/deploy`

**O que faz:** Faz build, commit, push e deploy para GitHub Pages.

```
/deploy         → build + deploy completo para danielsilvaengpt.github.io/portfolio/
```

**O agente irá:**
1. Verificar `MEMORY.md` para confirmar que o projeto está estável
2. Correr `npm run build` — se falhar, ativa o protocolo `/problem` automaticamente
3. Fazer commit de tudo o que estiver por commitar:
   ```
   git add .
   git commit -m "chore: deploy — [descrição do que mudou]"
   git push origin main
   ```
4. Correr `npm run deploy` (publica para gh-pages)
5. Verificar o URL live: `https://danielsilvaengpt.github.io/portfolio/`
6. Gravar no changelog do `MEMORY.md`

### Convenção de commits usada
```
feat:    nova funcionalidade
fix:     correção de bug
chore:   deploy, configuração, tarefas de manutenção
style:   alterações visuais/CSS
refactor: refactoring sem mudança de comportamento
```

---

## Como o Changelog Funciona

Cada comando grava automaticamente uma entrada no `MEMORY.md` neste formato:

```markdown
### [2026-10-27 01:15] — /phase 0 — Project Setup Complete

**Action:** Initialized Vite + React + TypeScript project. Installed all dependencies.
**Files changed:** package.json, vite.config.ts, tailwind.config.ts, globals.css
**Decisions:** Usou Geist font via @fontsource. base='/portfolio/' no vite.config.ts.
**Status:** ✅ Complete
**Notes:** Node v20.x. Dev server em localhost:5173.
```

Isto garante que **em qualquer sessão futura**, o agente sabe exatamente:
- O que já foi implementado
- Que decisões foram tomadas e porquê
- Que problemas já foram resolvidos
- O estado atual do projeto

---

## Fluxo Recomendado de Desenvolvimento

```
/phase 0    → setup do projeto
/phase 1    → design tokens
/phase 2    → navbar
/phase 3    → hero
    ↓
/problem ... → se algo não funcionar
/new ...    → se quiseres adicionar algo novo
    ↓
/phase 4    → about
/phase 5    → experience
... (continuar por ordem)
    ↓
/deploy     → quando uma secção ou conjunto de secções estiver pronto
```

---

## Ficheiros de Contexto (lidos automaticamente pelo agente)

| Ficheiro | Localização |
|---|---|
| `MEMORY.md` | `brain/1f7e6e15.../MEMORY.md` |
| `TASKS.md` | `brain/1f7e6e15.../TASKS.md` |
| `DESIGN.md` | `brain/1f7e6e15.../DESIGN.md` |
| `CLAUDE.md` | `brain/1f7e6e15.../CLAUDE.md` |
| `ARCHITECTURE.md` | `brain/1f7e6e15.../ARCHITECTURE.md` |
| `SKILL.md` (skill ativo) | `Portfolio/.agents/skills/portfolio-commands/SKILL.md` |
