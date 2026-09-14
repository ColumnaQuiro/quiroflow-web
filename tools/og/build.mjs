// Renders public/og-*.png from template.html + cards.json. See README.md.
import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const publicDir = resolve(here, '../../public')
const chrome = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const template = readFileSync(join(here, 'template.html'), 'utf8')
const cards = JSON.parse(readFileSync(join(here, 'cards.json'), 'utf8'))
const work = mkdtempSync(join(tmpdir(), 'quiroflow-og-'))

// Only the title carries intentional markup (<em> for the indigo half, <br>
// for the line break). Everything else is escaped, so a stray & or < in the
// copy cannot break the layout.
const escape = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const check = label =>
  `<div><span class="dot"><svg viewBox="0 0 18 18" fill="none">`
  + `<path d="M4.5 9.3l2.6 2.6 6-6.2" stroke="#157F52" stroke-width="2.4" `
  + `stroke-linecap="round" stroke-linejoin="round"/></svg></span>${escape(label)}</div>`

for (const [name, card] of Object.entries(cards)) {
  const html = template
    .replace('__EYEBROW__', escape(card.eyebrow))
    .replace('__TITLE__', card.title)
    .replace('__SUB__', escape(card.sub))
    .replace('__PROOF__', card.proof.map(check).join(''))

  const page = join(work, `${name}.html`)
  writeFileSync(page, html)

  execFileSync(chrome, [
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    `--screenshot=${join(publicDir, `${name}.png`)}`,
    // Generous: the card must not be captured before the webfont paints.
    '--virtual-time-budget=6000',
    `file://${page}`,
  ], { stdio: 'ignore' })

  console.log(`rendered public/${name}.png`)
}
