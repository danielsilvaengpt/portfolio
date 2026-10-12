# Portfolio · Daniel Silva

Website de portfólio de **Daniel Silva**, Engenheiro Informático Júnior com foco em **Dados e IA**.

**Site:** https://danielsilvaengpt.github.io/portfolio/

## Sobre

Conta a minha transição do mundo físico (máquinas CNC, automação industrial) para o mundo digital (dados, IA, engenharia de dados). O fio condutor é um braço robótico em wireframe, controlado pelo scroll, que desenha um toolpath e o transforma numa rede de dados.

## Funcionalidades

- Cena 3D com Three.js controlada pelo scroll (avança e recua), com versão leve em ecrãs pequenos e qualidade adaptativa
- Versões **PT e EN** com seletor (idioma por defeito segundo o browser)
- Modo claro e escuro
- Casos de estudo dos projetos, cada um com a sua cena 3D e etiquetas
- Respeita `prefers-reduced-motion`; navegação por teclado e HTML semântico
- Sem framework nem passo de build

## Estrutura

```
portfolio/
├── index.html
├── css/style.css
├── js/            (hero, sections, scene, i18n, effects)
├── assets/
│   ├── img/          (foto, capa do BI, imagem de partilha)
│   └── cv/           (CV em PT e EN)
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

## Executar localmente

O site é estático. Basta servir a pasta:

```bash
git clone https://github.com/danielsilvaengpt/portfolio.git
cd portfolio
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Tecnologias

HTML, CSS e JavaScript simples · [Three.js](https://threejs.org/) r128 · [GSAP](https://gsap.com/) · Google Fonts (Space Grotesk, Inter, JetBrains Mono) · alojado no GitHub Pages.

## Contacto

- Email: danielsilva.eng.pt@gmail.com
- LinkedIn: [daniel-silva-eng-pt](https://www.linkedin.com/in/daniel-silva-eng-pt/)
- GitHub: [danielsilvaengpt](https://github.com/danielsilvaengpt)
