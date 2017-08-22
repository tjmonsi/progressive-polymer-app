const helmet = require('helmet')
const cookie = require('cookie-parser')
const cors = require('cors')

module.exports = (app) => {
  app.use(helmet())
  app.use(cors({
    origin: true,
    allowedHeaders: 'Set-Cookie, Cookie, Content-Type, Authorization',
    credentials: true
  }))
  app.use(cookie())

  // app.disable('x-powered-by')
  // app.use((req, res, next) => {
  //   res.setHeader('Access-Control-Allow-Origin', '*')
  //   res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  //   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-type, Authorization')
  //   next()
  // })
  return app
}
