const fs = require('fs')

const {
  getContentType, getFilePath, handleReadError, staticBase
} = require('./utils')

module.exports = function serveStaticAsset (request, response) {
  const { url } = request
  const filePath = url === '/' ? indexPath : getFilePath(url)

  fs.readFile(filePath, function(error, content) {
    if (error) {
      return handleReadError(error, response)
    }

    response.writeHead(200, { 'Content-Type': getContentType(filePath) })
    response.end(content, 'utf-8')
  })
}

const indexPath = `${staticBase}/index.html`
