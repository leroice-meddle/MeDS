const fs = require('fs')
const path = require('path')

const componentsDir = path.join(__dirname, '..', 'components')

// Folders whose stories live under 'Meddle DS/' as design-system reference.
const referenceFolders = new Set(['TokenReference', 'TypePrimitives', 'Typography'])

// Match the meta `title:` string — the only title value that begins with 'Meddle DS/'.
const titleRe = /title:\s*(['"])Meddle DS\/(.*?)\1/

function collectStoryFiles(dir) {
  const files = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...collectStoryFiles(full))
    } else if (/\.stories\.jsx?$/.test(entry.name)) {
      files.push(full)
    }
  }
  return files
}

function newTitleFor(file, currentSuffix) {
  const folder = path.basename(path.dirname(file))
  const componentName = path.basename(file).replace(/\.stories\.jsx?$/, '')

  if (folder === 'Icon') return 'Meddle DS/Iconography'
  if (referenceFolders.has(folder)) return `Meddle DS/${componentName}`
  // All other UI components move under 'Components/', keeping their leaf name.
  return `Components/${currentSuffix}`
}

let changed = 0
for (const file of collectStoryFiles(componentsDir)) {
  const content = fs.readFileSync(file, 'utf8')
  const match = content.match(titleRe)
  if (!match) {
    console.warn(`skip (no Meddle DS title): ${path.relative(componentsDir, file)}`)
    continue
  }

  const quote = match[1]
  const suffix = match[2]
  const next = newTitleFor(file, suffix)
  const updated = content.replace(titleRe, `title: ${quote}${next}${quote}`)

  if (updated !== content) {
    fs.writeFileSync(file, updated)
    console.log(`${path.relative(componentsDir, file)}: 'Meddle DS/${suffix}' -> '${next}'`)
    changed++
  }
}

console.log(`Done — updated ${changed} story file(s)`)
