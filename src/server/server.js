const http = require('http')

const router = require('./router.js')

const { HOST, PORT } = process.env

http.createServer(router)
.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`)
})
