const functions = require('firebase-functions')
const express = require('express')
const session = require('cookie-session')
const cookie = require('cookie-parser')
const config = require('./src/config.json')
const helmet = require('helmet')

var app = express()

app.use(cookie())
app.use(session({
  name: '__session',
  keys: ['key1', 'key2']
}))
app.use(helmet())
// app.use(express.static('core/dist'))
app.use('/_auth', require('./core/authenticate')(config))
app.use('/', require('./core/app')(config))

exports.app = functions.https.onRequest(app)
