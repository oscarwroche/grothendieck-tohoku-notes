const fs = require('node:fs');
const path = require('node:path');
const MarkdownIt = require('markdown-it');
const math = require('markdown-it-mathjax');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const notes = fs.readFileSync(path.join(root, 'notes-lecture-tohoku.md'), 'utf8');
const siteNotes = notes.replace(/^\*\*Pour lire avec les formules affichées :\*\*[^\n]*\n\n/m, '');
const markdown = new MarkdownIt({ html: true, linkify: true, typographer: false }).use(math());

function indexNotes(source) {
  const entries = [];
  const headingIds = [];
  const usedIds = new Set();
  const lines = source.split('\n');
  let sectionLevel = 2;

  function makeId(label, prefix = '') {
    const base = label.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/<[^>]*>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const stem = `${prefix}${base || 'passage'}`;
    let id = stem;
    let suffix = 2;
    while (usedIds.has(id)) id = `${stem}-${suffix++}`;
    usedIds.add(id);
    return id;
  }

  for (let i = 0; i < lines.length; i++) {
    const heading = lines[i].match(/^(#{2,3}) (.+)$/);
    if (heading) {
      sectionLevel = heading[1].length;
      const label = heading[2];
      const shortLabel = label.replace(/\s*\(PDF p\..*$/, '');
      const id = makeId(shortLabel);
      headingIds.push(id);
      entries.push({ id, label: shortLabel, level: sectionLevel, kind: 'heading' });
      continue;
    }

    if (lines[i] === '<details>') {
      const summary = lines[i + 1]?.match(/^<summary>(.+)<\/summary>$/);
      if (summary) {
        const id = makeId(summary[1], 'annexe-');
        lines[i] = `<details id="${id}">`;
        entries.push({ id, label: summary[1], level: sectionLevel + 1, kind: 'detail' });
      }
    }
  }
  return { source: lines.join('\n'), entries, headingIds };
}

const indexed = indexNotes(siteNotes);
let headingNumber = 0;
markdown.renderer.rules.heading_open = (tokens, index, options, env, self) => {
  if (tokens[index].tag === 'h2' || tokens[index].tag === 'h3') {
    tokens[index].attrSet('id', indexed.headingIds[headingNumber++]);
  }
  return self.renderToken(tokens, index, options);
};
const body = markdown.render(indexed.source);
const toc = `<nav class="toc" aria-label="Index des notes"><ul>${indexed.entries.map(entry =>
  `<li class="toc-level-${entry.level}${entry.kind === 'detail' ? ' toc-detail' : ''}"><a href="#${entry.id}">${markdown.renderInline(entry.label)}</a></li>`
).join('')}</ul></nav>`;
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
    body { margin: 0; background: var(--back); color: var(--ink); font: 17px/1.68 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    header { background: var(--paper); border-bottom: 1px solid var(--line); }
    header .inner { max-width: 1300px; margin: auto; padding: 1rem 1.5rem; display: flex; align-items: baseline; gap: 1rem; justify-content: space-between; }
    header strong { font-size: 1.05rem; }
    header nav { display: flex; gap: 1rem; flex-wrap: wrap; font-size: .9rem; }
    .site-layout { max-width: 1300px; margin: 1.5rem auto; padding: 0 1rem; display: grid; grid-template-columns: minmax(220px, 270px) minmax(0, 900px); gap: 1.5rem; align-items: start; }
    main { min-width: 0; padding: 2.5rem 3rem; background: var(--paper); border: 1px solid var(--line); border-radius: 12px; }
    .toc-sidebar { position: sticky; top: 1rem; max-height: calc(100vh - 2rem); overflow-y: auto; padding: 1.1rem 1rem; background: var(--paper); border: 1px solid var(--line); border-radius: 10px; }
    .toc-sidebar h2 { margin: 0 0 .75rem; padding: 0; border: 0; font-size: 1rem; }
    .toc-mobile { display: none; }
    .toc ul { margin: 0; padding: 0; list-style: none; }
    .toc li { margin: 0; line-height: 1.35; }
    .toc a { display: block; padding: .35rem .4rem; border-radius: 5px; color: var(--ink); text-decoration: none; overflow-wrap: normal; }
    .toc a:hover, .toc a:focus-visible { background: #edf3f9; color: var(--link); }
    .toc-level-2 { margin-top: .5rem !important; font-weight: 700; }
    .toc-level-3 { padding-left: .65rem; font-size: .9rem; }
    .toc-level-4 { padding-left: 1.35rem; font-size: .84rem; color: var(--muted); }
    .toc-detail a::before { content: '▸ '; color: var(--muted); }
    main h2, main h3, main details { scroll-margin-top: 1rem; }
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
    @media (max-width: 980px) { .site-layout { display: block; max-width: 900px; } .toc-sidebar { display: none; } .toc-mobile { display: block; margin: 0 0 1rem; background: var(--paper); } .toc-mobile nav { max-height: min(55vh, 480px); overflow-y: auto; margin-top: .6rem; } }
    @media (max-width: 680px) { body { font-size: 16px; } header .inner { display: block; } header nav { margin-top: .3rem; } .site-layout { margin: 0; padding: 0; } .toc-mobile { margin: .8rem; } main { padding: 1.3rem 1.1rem; border: 0; border-radius: 0; } }
  </style>
  <script>
    window.MathJax = ${mathJaxConfig};
  </script>
  <script defer src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-chtml.js"></script>
</head>
<body>
  <header><div class="inner"><strong>Lecture de Tôhoku</strong><nav><a href="#notes">Notes</a><a href="fr-p119-213.pdf">PDF source</a><a href="https://github.com/oscarwroche/grothendieck-tohoku-notes/blob/main/notes-lecture-tohoku.md">Markdown</a></nav></div></header>
  <div class="site-layout">
    <aside class="toc-sidebar"><h2>Index des notes</h2>${toc}</aside>
    <details class="toc-mobile"><summary>Index des notes</summary>${toc}</details>
    <main id="notes">${body}</main>
  </div>
  <script>
    function revealHash(hash) {
      const target = document.getElementById(hash.slice(1));
      if (!target) return null;
      const detail = target.tagName === 'DETAILS' ? target : target.nextElementSibling?.tagName === 'DETAILS' ? target.nextElementSibling : null;
      if (detail) detail.open = true;
      return detail || target;
    }
    async function jumpTo(hash) {
      const target = revealHash(hash);
      if (!target) return;
      if (window.MathJax?.startup?.promise) await window.MathJax.startup.promise;
      requestAnimationFrame(() => target.scrollIntoView({ block: 'start', behavior: 'instant' }));
    }
    document.querySelectorAll('.toc a').forEach(link => link.addEventListener('click', event => {
      event.preventDefault();
      const mobile = link.closest('.toc-mobile');
      if (mobile) mobile.open = false;
      history.pushState(null, '', link.hash);
      jumpTo(link.hash);
    }));
    window.addEventListener('hashchange', () => jumpTo(location.hash));
    window.addEventListener('popstate', () => jumpTo(location.hash));
    jumpTo(location.hash);
  </script>
</body>
</html>`;

fs.mkdirSync(output, { recursive: true });
fs.writeFileSync(path.join(output, 'index.html'), page);
fs.copyFileSync(path.join(root, 'fr-p119-213.pdf'), path.join(output, 'fr-p119-213.pdf'));
console.log(`Built ${path.join(output, 'index.html')}`);
