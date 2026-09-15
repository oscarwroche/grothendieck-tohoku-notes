const fs = require('node:fs');
const path = require('node:path');
const MarkdownIt = require('markdown-it');
const math = require('markdown-it-mathjax');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const notes = fs.readFileSync(path.join(root, 'notes-lecture-tohoku.md'), 'utf8');
const siteNotes = notes.replace(/^\*\*Pour lire avec les formules affichées :\*\*[^\n]*\n\n/m, '');
const markdown = new MarkdownIt({ html: true, linkify: true, typographer: false }).use(math());
const body = markdown.render(siteNotes);
const mathJaxConfig = JSON.stringify({
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true
  },
  options: { enableMenu: true }
});

const page = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Notes de lecture de Sur quelques points d'algèbre homologique de Grothendieck.">
  <title>Tôhoku — notes de lecture</title>
  <style>
    :root { color-scheme: light; --ink: #243044; --muted: #59677a; --line: #dce2ea; --link: #245a8d; --paper: #ffffff; --back: #f4f6f9; }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { margin: 0; background: var(--back); color: var(--ink); font: 17px/1.68 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    header { background: var(--paper); border-bottom: 1px solid var(--line); }
    header .inner { max-width: 900px; margin: auto; padding: 1rem 1.5rem; display: flex; align-items: baseline; gap: 1rem; justify-content: space-between; }
    header strong { font-size: 1.05rem; }
    header nav { display: flex; gap: 1rem; flex-wrap: wrap; font-size: .9rem; }
    main { max-width: 900px; margin: 2rem auto; padding: 2.5rem 3rem; background: var(--paper); border: 1px solid var(--line); border-radius: 12px; }
    h1, h2, h3 { line-height: 1.3; margin-top: 2.2rem; }
    h1 { margin-top: 0; font-size: 2rem; }
    h2 { padding-top: .6rem; border-top: 1px solid var(--line); font-size: 1.55rem; }
    h3 { font-size: 1.18rem; }
    p, li { overflow-wrap: anywhere; }
    a { color: var(--link); text-decoration-thickness: 1px; text-underline-offset: 2px; }
    a:hover { text-decoration-thickness: 2px; }
    details { margin: 1.3rem 0; padding: .7rem 1rem; border: 1px solid var(--line); border-radius: 8px; background: #fbfcfe; }
    summary { cursor: pointer; font-weight: 600; }
    details[open] summary { margin-bottom: .7rem; }
    blockquote { margin: 1.3rem 0; padding: .1rem 1rem; border-left: 3px solid var(--line); color: var(--muted); }
    hr { border: 0; border-top: 1px solid var(--line); margin: 2rem 0; }
    mjx-container[display="true"] { overflow-x: auto; overflow-y: hidden; padding: .3rem 0; }
    @media (max-width: 680px) { body { font-size: 16px; } header .inner { display: block; } header nav { margin-top: .3rem; } main { margin: 0; padding: 1.3rem 1.1rem; border: 0; border-radius: 0; } }
  </style>
  <script>
    window.MathJax = ${mathJaxConfig};
  </script>
  <script defer src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-chtml.js"></script>
</head>
<body>
  <header><div class="inner"><strong>Lecture de Tôhoku</strong><nav><a href="#notes">Notes</a><a href="fr-p119-213.pdf">PDF source</a><a href="https://github.com/oscarwroche/grothendieck-tohoku-notes/blob/main/notes-lecture-tohoku.md">Markdown</a></nav></div></header>
  <main id="notes">${body}</main>
</body>
</html>`;

fs.mkdirSync(output, { recursive: true });
fs.writeFileSync(path.join(output, 'index.html'), page);
fs.copyFileSync(path.join(root, 'fr-p119-213.pdf'), path.join(output, 'fr-p119-213.pdf'));
console.log(`Built ${path.join(output, 'index.html')}`);
