const express = require('express')
const client = require('../firebase').default.client

module.exports = function (config) {
  var router = express.Router({caseSensitive: true})

  router.post('/firebase', (req, res) => {
    client
    .auth()
    .signInWithEmailAndPassword(req.body.email, req.body.password)
    .then((user) => {
      user.getIdToken().then(token => {
        req.session.token = token
        var cookie
        try {
          cookie = JSON.parse(req.cookies.__session)
        } catch (e) {
          console.log(e)
          cookie = {}
        }
        cookie.token = token
        res.cookie('__session', JSON.stringify(cookie), { path: '/_auth' })
        if (req.query.data || req.params.data) {
          res.status(200).json({
            status: 200,
            token
          })
        } else {
          res.redirect('/')
        }
      })
    })
    .catch(e => {
      if (req.query.data || req.params.data) {
        res.status(401).json({
          status: 401,
          error: e,
          code: 'auth/incorrect-email-password'
        })
      } else {
        res.redirect('/login?error=' + encodeURI('auth/incorrect-email-password'))
      }
    })
  })

  return router
}
