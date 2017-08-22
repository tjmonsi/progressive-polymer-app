const express = require('express')
const consolidate = require('consolidate')
const session = require('cookie-session')
const cookie = require('cookie-parser')
const fs = require('fs')
const path = require('path')
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
      console.log(auth)
      consolidate.handlebars('./core/shell/index.hbs', Object.assign({}, config, { partials: {
        page: `../../${page}`
      }}), (err, html) => {
        if (err) {
          return res.status(500).send(err)
        }
        res.status(200).send(html)
      })
    })
  })

  return router
}
