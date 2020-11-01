/* eslint-disable */
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const { PORT, NODE_ENV } = process.env
const port = parseInt(PORT, 10)
const dev = NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl
    if (pathname === '/sw.js') {
      handle(req, res, { ...parsedUrl, pathname: '/static/sw.js' })
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
