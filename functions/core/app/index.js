const express = require('express')
const consolidate = require('consolidate')
const session = require('cookie-session')
const cookie = require('cookie-parser')
const fs = require('fs')
const path = require('path')
const minify = require('html-minifier').minify
const middleware = {}
const mids = fs.readdirSync(path.join(__dirname, '/../middleware'))
mids.forEach(item => {
  middleware[item.replace('.js', '')] = require(`../middleware/${item}`)
})

module.exports = function (config) {
  var router = express.Router({caseSensitive: true})
  var routes = []

  router.use(cookie())
  router.use(session({
    name: '__session',
    keys: ['key1', 'key2']
  }))

  for (var i in config.routing) {
    routes.push({route: i, value: config.routing[i]})
  }

  routes.forEach(item => {
    const auth = item.value.auth || 'no-validation'
    const page = item.value.page || item.value
    router.get(item.route, middleware[auth], (req, res) => {
      consolidate.handlebars('./core/dist/index.hbs', Object.assign({}, config, { partials: {
        page: `../../${page}/template`
      }}), (err, html) => {
        if (err) {
          return res.status(500).send(err)
        }

        res.status(200).send(config.app.build === 'prod' ? minify(html, {
          caseSensitive: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          minifyCSS: true,
          minifyJS: true,
          preserveLineBreaks: true
        }) : html)
      })
    })
  })

  return router
}
