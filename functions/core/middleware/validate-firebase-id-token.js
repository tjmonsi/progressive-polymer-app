const admin = require('../firebase').admin.default
const consolidate = require('consolidate')
const config = require('../../src/config.json')

const renderUnAuthorized = (res) => {
  consolidate.handlebars('./core/shell/index.hbs', Object.assign({}, config, { partials: {
    page: `../../${config.httpCodes.unauthorized}`
  }}), (err, html) => {
    if (err) {
      return res.status(500).send(err)
    }
    res.status(403).send(html)
  })
}

module.exports = (req, res, next) => {
  if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
      !req.cookies.__session) {
    console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
        'Make sure you authorize your request by providing the following HTTP header:',
        'Authorization: Bearer <Firebase ID Token>',
        'or by passing a "__session" cookie.')
    return renderUnAuthorized(res)
  }

  let idToken
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    console.log('Found "Authorization" header')
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split('Bearer ')[1]
  } else {
    console.log('Found "__session" cookie')
    // Read the ID Token from cookie.
    idToken = req.cookies.__session
  }
  admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
    console.log('ID Token correctly decoded', decodedIdToken)
    req.user = decodedIdToken
    next()
  }).catch(error => {
    console.error('Error while verifying Firebase ID token:', error)
    return renderUnAuthorized(res)
  })
}
