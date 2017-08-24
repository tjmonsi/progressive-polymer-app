const admin = require('../firebase').default.server
const renderPage = require('../utils/render-page')
const config = require('../../src/config.json')

const renderUnAuthorized = (req, res) => {
  const page = config.httpCodes.unauthorized
  const header = config.default.header
  const footer = config.default.footer
  const headerName = header.split('/')[header.split('/').length - 1]
  const pageName = page.split('/')[page.split('/').length - 1]
  const footerName = footer.split('/')[footer.split('/').length - 1]

  renderPage(req, res, 401, req.query.fragment ? './core/shell/fragment.hbs' : './core/dist/index.hbs', config, {}, {
    header: `../../${header}/${headerName}`,
    page: `../../${page}/${pageName}`,
    footer: `../../${footer}/${footerName}`
  })
}

module.exports = (req, res, next) => {
  console.log(req.cookies)
  console.log(req.headers.authorization, req.cookies.__session, req.session.token)
  if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
      !req.cookies.__session && !req.session.token) {
    console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
        'Make sure you authorize your request by providing the following HTTP header:',
        'Authorization: Bearer <Firebase ID Token>',
        'or by passing a "__session" cookie.')
    return renderUnAuthorized(req, res)
  }

  let idToken
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    console.log('Found "Authorization" header')
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split('Bearer ')[1]
  } else if (req.cookies.__session) {
    console.log('Found "__session" cookie')
    // Read the ID Token from cookie.
    // idToken = req.cookies.__session
    try {
      const cookie = JSON.parse(req.cookies.__session)
      idToken = cookie.token
    } catch (e) {
      console.log(e)
      idToken = req.cookies.__session
    }
  } else {
    console.log('Found cookie session')
    // Read the ID Token from cookie.
    idToken = req.session.token
  }
  admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
    console.log('ID Token correctly decoded', decodedIdToken)
    req.user = decodedIdToken
    next()
  }).catch(error => {
    console.error('Error while verifying Firebase ID token:', error)
    return renderUnAuthorized(req, res)
  })
}
