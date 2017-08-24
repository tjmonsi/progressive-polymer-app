const express = require('express')
// const renderPage = require('../utils/render-page')
const client = require('../firebase').default.client

module.exports = function (config) {
  var router = express.Router({caseSensitive: true})

  router.post('/firebase', (req, res) => {
    client
    .auth()
    .signInWithEmailAndPassword(req.body.email, req.body.password)
    .then((user) => {
      user.getIdToken().then(token => {
        // const item = {
        //   value: config.routing['/']
        // }
        // const page = item.value.page || item.value
        // const header = item.value.header || config.default.header
        // const footer = item.value.footer || config.default.footer
        // const headerName = header.split('/')[header.split('/').length - 1]
        // const pageName = page.split('/')[page.split('/').length - 1]
        // const footerName = footer.split('/')[footer.split('/').length - 1]

        res.set('authorization', `Bearer ${token}`)
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

        // res.location('/')
        // renderPage(req, res, 200, req.query.fragment ? './core/shell/fragment.hbs' : './core/dist/index.hbs', config, {}, {
        //   header: `../../${header}/${headerName}`,
        //   page: `../../${page}/${pageName}`,
        //   footer: `../../${footer}/${footerName}`
        // })
      })
    })
  })

  return router
}
