const express = require('express')
const cons = require('consolidate')
var app = require('../essentials')(express())
const config = require('../../src/config/dev.json')
// const middleware = require('../middleware')
// console.log(middleware)

const render = (req, res, data) => {
  cons.handlebars('core/shell/index.hbs', Object.assign({}, config, data, { partials: {
    page: `../../${data.page}`
  }}), (err, html) => {
    if (err) {
      console.log(err)
      res.status(500).send('500 Error')
    }
    res.send(html)
  })
}

const setPage = (app, route, routing) => {
  if ((typeof routing === 'string')) {
    app.get(route, (req, res) => (render(req, res, { page: routing })))
  } else if (typeof routing === 'object') {
    if (!routing.auth) {
      app.get(route, (req, res) => (render(req, res, routing)))
    } else {
      app.get(route, (req, res) => (render(req, res, routing)))
    }
  }
  return app
}

for (var i in config.routing) {
  app = setPage(app, i, config.routing[i])
}

module.exports = app
