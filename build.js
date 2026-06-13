#!/usr/bin/env node
// Stamps shared nav/footer templates into every HTML page.
// Edit _src/nav.html, _src/footer.html (or their -edu variants), then run:
//   node build.js

const fs   = require('fs');
const path = require('path');

const SRC = '_src';

function readTmpl(name) {
  return fs.readFileSync(path.join(SRC, name), 'utf8');
}

function findHtml(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) findHtml(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const tmpl = {
  nav:          readTmpl('nav.html'),
  navEdu:       readTmpl('nav-edu.html'),
  footer:       readTmpl('footer.html'),
  footerEdu:    readTmpl('footer-edu.html'),
  pricingCards: readTmpl('pricing-cards.html'),
};

const files = findHtml('.');
let updated = 0;

for (const file of files) {
  const rel    = file.replace(/\\/g, '/').replace(/^\.\//, '');
  const depth  = rel.split('/').length - 1;          // 0 = root, 1 = edu/…
  const isEdu  = rel.startsWith('edu/');
  const base   = '../'.repeat(depth);                // '' or '../'

  const nav    = (isEdu ? tmpl.navEdu    : tmpl.nav)
                  .replace(/\{\{BASE\}\}/g, base);
  const footer = (isEdu ? tmpl.footerEdu : tmpl.footer)
                  .replace(/\{\{BASE\}\}/g, base);

  let content = fs.readFileSync(file, 'utf8');
  const orig  = content;

  content = content.replace(/<nav class="nav">[\s\S]*?<\/nav>/, nav);
  content = content.replace(/<footer>[\s\S]*?<\/footer>/, footer);
  const cards = tmpl.pricingCards.replace(/\{\{BASE\}\}/g, base);
  content = content.replace(/<!-- PRICING-CARDS-START -->[\s\S]*?<!-- PRICING-CARDS-END -->/, `<!-- PRICING-CARDS-START -->\n${cards}<!-- PRICING-CARDS-END -->`);

  if (content !== orig) {
    fs.writeFileSync(file, content);
    updated++;
    console.log('  updated:', rel);
  }
}

console.log(`\nDone — ${updated}/${files.length} file(s) updated.`);
