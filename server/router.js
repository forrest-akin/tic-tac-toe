const validateRequest = require('./validateRequest')
const serveStaticAsset = require('./serveStaticAsset')

module.exports = function router (request, response) {
  return validateRequest(request, response, serveStaticAsset)
}
