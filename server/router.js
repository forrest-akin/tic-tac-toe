const validateRequest = require('./validateRequest')
const serveStaticAsset = require('./serveStaticAsset')

module.exports = function router (request, response) {
  validateRequest(request, response, () => serveStaticAsset(request, response))
}
