const express = require('express')
const cons = require('consolidate')
const app = express()
const config = require('../../src/config/dev.json')

app.get('/', (req, res) => {
  cons.handlebars('core/shell/index.hbs', Object.assign({}, config, { partials: {
    page: '../../src/pages/index'
  }}), (err, html) => {
    if (err) {
      return console.log(err)
    }
    res.send(html)
  })
})

module.exports = app
