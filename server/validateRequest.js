const { send404 } = require('./utils')

module.exports = function validateRequest (request, response, next) {
  const { method, url } = request

  if (method !== 'GET' || url.includes('..')) {
    return send404(response)
  }

  next()
}
