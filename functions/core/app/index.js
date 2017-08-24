const express = require('express')
const renderPage = require('../utils/render-page')
const mids = ['validate-firebase-id-token', 'no-validation']
const middleware = {}
mids.forEach(item => {
  middleware[item] = require(`../middleware/${item}`)
})

module.exports = function (config) {
  var router = express.Router({caseSensitive: true})
  var routes = []

  for (var i in config.routing) {
    routes.push({route: i, value: config.routing[i]})
  }

  routes.forEach(item => {
    const auth = item.value.auth || 'no-validation'
    const page = item.value.page || item.value
    const header = item.value.header || config.default.header
    const footer = item.value.footer || config.default.footer
    const headerName = header.split('/')[header.split('/').length - 1]
    const pageName = page.split('/')[page.split('/').length - 1]
    const footerName = footer.split('/')[footer.split('/').length - 1]
    router.get(item.route, middleware[auth], (req, res) => {
      renderPage(req, res, 200, req.query.fragment ? './core/shell/fragment.hbs' : './core/dist/index.hbs', config, {}, {
        header: `../../${header}/${headerName}`,
        page: `../../${page}/${pageName}`,
        footer: `../../${footer}/${footerName}`
      })
    })
  })

  router.get('*', (req, res) => {
    const page = config.httpCodes.notfound
    const header = config.default.header
    const footer = config.default.footer
    const headerName = header.split('/')[header.split('/').length - 1]
    const pageName = page.split('/')[page.split('/').length - 1]
    const footerName = footer.split('/')[footer.split('/').length - 1]
    renderPage(req, res, 404, req.query.fragment ? './core/shell/fragment.hbs' : './core/dist/index.hbs', config, {}, {
      header: `../../${header}/${headerName}`,
      page: `../../${page}/${pageName}`,
      footer: `../../${footer}/${footerName}`
    })
  })

  return router
}
