const firebase = require('../firebase/apps')
// const

module.exports = (req, res, next) => {
  // firebase.client.default.verifyIdToken()
  console.log()
  console.log(req.signedCookies, req.cookies, req.session)
  console.log(req.header('authorization'))
  console.log()
  next()
}
