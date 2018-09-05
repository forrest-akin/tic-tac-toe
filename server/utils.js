const fs = require('fs')
const path = require('path')

const clientBase = path.resolve('./client')

module.exports = {
  clientBase,
  getContentType,
  getFilePath,
  handleReadError,
  send404,
  send500,
}

function getContentType (filePath) {
  return mimeTypes[path.extname(filePath)]
}

function getFilePath (url) {
  const filePath = path.extname(url) ? url : `${url}/index.js`
  return `${clientBase}${filePath}`
}

function handleReadError (error, response) {
  console.log(`error: ${error}`)

  if (error.code === 'ENOENT') {
    return send404(response)
  }

  send500(error, response)
}

function send404 (response) {
  fs.readFile(`${serverBase}/404.html`, function(error, content) {
    if (error) {
      return send500(error, response)
    }

    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end(content, 'utf-8')
  })
}

function send500 (error, response) {
  response.writeHead(500)
  response.end(`Internal Server Error: ${error.code}`)
}

const mimeTypes = {
  '.css':  'text/css',
  '.eot':  'application/vnd.ms-fontobject',
  '.gif':  'image/gif',
  '.html': 'text/html',
  '.jpg':  'image/jpg',
  '.js':   'text/javascript',
  '.json': 'application/json',
  '.mp4':  'video/mp4',
  '.otf':  'application/font-otf',
  '.png':  'image/png',
  '.svg':  'application/image/svg+xml',
  '.ttf':  'application/font-ttf',
  '.wav':  'audio/wav',
  '.woff': 'application/font-woff',
}

const serverBase = path.resolve('./server')
