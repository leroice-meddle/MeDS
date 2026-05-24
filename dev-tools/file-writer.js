const http = require('http')
const fs = require('fs')
const path = require('path')
const os = require('os')

const PORT = 3331
const BASE_DIR = path.join(os.homedir(), 'Documents', 'meds')

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return }

  if (req.method === 'POST' && req.url === '/write') {
    let body = ''
    req.on('data', chunk => (body += chunk))
    req.on('end', () => {
      try {
        const { files } = JSON.parse(body)
        const written = []
        for (const file of files) {
          const fullPath = path.join(BASE_DIR, file.relativePath)
          if (!fullPath.startsWith(BASE_DIR)) throw new Error('Path outside meds dir')
          fs.mkdirSync(path.dirname(fullPath), { recursive: true })
          fs.writeFileSync(fullPath, file.content, 'utf8')
          written.push(file.relativePath)
          console.log('Written:', file.relativePath)
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ ok: true, written }))
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ ok: false, error: err.message }))
      }
    })
    return
  }

  if (req.method === 'POST' && req.url === '/run') {
    let body = ''
    req.on('data', chunk => (body += chunk))
    req.on('end', () => {
      try {
        const { command } = JSON.parse(body)
        const { execSync } = require('child_process')
        const allowed = /^(git |npm run |tail |mkdir )/
        if (!allowed.test(command)) throw new Error('Command not allowed: ' + command)
        console.log('Running:', command)
        const output = execSync(command, { cwd: BASE_DIR, encoding: 'utf8' })
        console.log(output)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ ok: true, output }))
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ ok: false, error: err.message }))
      }
    })
    return
  }

  res.writeHead(404); res.end()
})

server.listen(PORT, '127.0.0.1', () => {
  console.log('MeDS file writer running at http://localhost:' + PORT)
  console.log('Base directory: ' + BASE_DIR)
  console.log('Ready — waiting for Claude...\n')
})
