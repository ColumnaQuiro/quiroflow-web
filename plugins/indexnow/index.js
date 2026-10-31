// Tells Bing (and through IndexNow, Yandex, Seznam, Naver...) which pages a
// production deploy added, changed or removed, so they are recrawled within
// hours instead of whenever the crawler next comes round. ChatGPT's search
// reads Bing's index, which is most of why this matters for this site.
//
// onSuccess runs after the deploy is live, so the URLs submitted already
// serve the new content when the search engine fetches them. It cannot fail
// the deploy: anything that goes wrong is a warning in the deploy summary.
//
// Google does not take part in IndexNow; Search Console covers it.
import { createHash } from 'node:crypto'
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const HOST = 'quiroflow.com'
// Public by design: the protocol proves ownership by serving this same value
// at https://quiroflow.com/<key>.txt (public/<key>.txt in this repo).
const KEY = '9c9ad3088165984a4199d0c54f67c2b7'
const ENDPOINT = 'https://api.indexnow.org/indexnow'
// The content hash of every page as of the last successful submission,
// carried between builds in Netlify's build cache.
const STATE_FILE = '.indexnow-state.json'

function sitemapUrls(publishDir) {
  const dir = join(publishDir, '__sitemap__')
  if (!existsSync(dir)) return []
  return readdirSync(dir)
    .filter(name => name.endsWith('.xml'))
    .flatMap(name => [...readFileSync(join(dir, name), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]))
}

// /software-fisioterapia -> software-fisioterapia.html, / -> index.html
// (nuxt.config.ts sets autoSubfolderIndex: false).
function htmlFileFor(publishDir, url) {
  const path = new URL(url).pathname.replace(/^\/|\/$/g, '')
  return join(publishDir, path ? `${path}.html` : 'index.html')
}

// Every build gets a fresh buildId and fresh /_nuxt/ asset hashes, so the raw
// HTML of an untouched page still differs from one deploy to the next. Hash
// only what a reader sees: drop scripts, <link> tags and any UUID.
function contentHash(file) {
  const html = readFileSync(file, 'utf8')
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<link[^>]*>/g, '')
    .replace(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/g, '')
  return createHash('sha256').update(html).digest('hex')
}

export const onSuccess = async ({ constants, utils }) => {
  // A local `netlify build` reports CONTEXT=production too, and must not
  // submit anything: nothing it built has been deployed.
  if (constants.IS_LOCAL || process.env.CONTEXT !== 'production') {
    console.log(`IndexNow: skipped (${constants.IS_LOCAL ? 'local build' : `${process.env.CONTEXT} deploy`}, not a production deploy).`)
    return
  }

  const current = {}
  for (const url of sitemapUrls(constants.PUBLISH_DIR)) {
    const file = htmlFileFor(constants.PUBLISH_DIR, url)
    if (existsSync(file)) current[url] = contentHash(file)
  }
  if (Object.keys(current).length === 0) {
    utils.status.show({ title: 'IndexNow', summary: 'No URLs found in the sitemap, nothing submitted.' })
    return
  }

  await utils.cache.restore(STATE_FILE)
  const previous = existsSync(STATE_FILE) ? JSON.parse(readFileSync(STATE_FILE, 'utf8')) : {}
  const changed = Object.keys(current).filter(url => previous[url] !== current[url])
  // A page that left the sitemap is submitted too: IndexNow is also how a
  // search engine learns that a URL is gone.
  const removed = Object.keys(previous).filter(url => !(url in current))
  const urlList = [...changed, ...removed]

  if (urlList.length === 0) {
    console.log('IndexNow: no page changed since the last submission.')
    return
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
    })
    // 200 and 202 both mean accepted (202: key not yet verified).
    if (res.status !== 200 && res.status !== 202) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
  } catch (error) {
    // State is not saved, so the same URLs are submitted again next deploy.
    utils.status.show({ title: 'IndexNow', summary: `Submission failed, will retry on the next deploy: ${error.message}` })
    return
  }

  writeFileSync(STATE_FILE, JSON.stringify(current, null, 2))
  await utils.cache.save(STATE_FILE)
  utils.status.show({ title: 'IndexNow', summary: `Submitted ${urlList.length} URL(s): ${changed.length} new or changed, ${removed.length} removed.` })
}
