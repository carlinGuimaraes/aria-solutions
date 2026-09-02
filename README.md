# ARIA Solutions — Site Institucional & Controle de Acesso

Projeto de desenvolvimento do site institucional e landing pages da **ARIA Solutions**, especializada em segurança eletrônica, controle de acesso e automação para empresas, condomínios e indústrias.

---

## 📁 Estrutura de Pastas e Páginas

O projeto está organizado por módulos de páginas e recursos dedicados:

```text
aria/
├── index.html                     # Ponto de entrada / redirecionador raiz para a Home
├── style.css                      # Design System & estilos compartilhados das páginas internas
├── script.js                      # Interatividade JavaScript compartilhada
├── logo.jpg                       # Logotipo oficial ARIA Solutions
│
├── home/                          # Página Inicial
│   ├── index.html                 # Layout completo da Home
│   └── home.css                   # Estilos visuais específicos da Home
│
├── quem-somos/                    # Página Institucional
│   └── index.html                 # História, liderança, pilares e dados cadastrais
│
├── cancelas-automaticas/          # Página de Solução
│   └── index.html                 # Landing page focada em cancelas e automação veicular
│
├── catracas-e-torniquetes/        # Página de Solução
│   └── index.html                 # Landing page focada em catracas, torniquetes e biométricos
│
├── images/                        # Ativos visuais e fotos reais
│   ├── parceiros/                 # Logos de fabricantes e sistemas parceiros
│   ├── card-*.jpg                 # Cards de soluções de software
│   └── ...                        # Fotos reais de instalações, equipe e equipamentos
│
├── gutenberg-blocks/              # Blocos HTML prontos para o editor Gutenberg (WordPress)
│   └── cancelas_gutenberg_blocks.html
│
├── wordpress/                     # Códigos de integração e suporte ao WordPress
│   ├── css_WP.css                 # CSS consolidado para injeção via WPCode / Elementor
│   └── js_WP.js                   # JavaScript para carrossel e comportamento no WP
│
└── docs/                          # Documentação e ativos de referência
    ├── pauta_reuniao_briefing_aria.md
    └── referencias/               # Prints de layouts e referências visuais
```

---

## 🚀 Como Visualizar Localmente

Basta abrir qualquer um dos arquivos `index.html` em seu navegador ou utilizar um servidor local estático:

```bash
# Servidor Python
python3 -m http.server 8000
```
Acesse `http://localhost:8000` para ser redirecionado para a Home.

---

## 🏢 Sobre a ARIA Solutions
- **Razão Social:** Daniel Hermon de Oliveira Lima
- **CNPJ:** 58.294.468/0001-16
- **Localização:** Rua Coronel Joaquim Piza, 140 – Garça/SP
- **WhatsApp:** (14) 99640-7570
