const functions = require('firebase-functions')
const express = require('express')
const config = require('./src/config.json')
// const helmet = require('helmet')
// const cookie = require('cookie-parser')

var app = express()

app.use(express.static('core/dist'))
app.use('/', require('./core/app')(config))

exports.app = functions.https.onRequest(app)
