const functions = require('firebase-functions')
const express = require('express')
const config = require('./src/config.json')
// const helmet = require('helmet')
// const cookie = require('cookie-parser')
// const cons = require('consolidate')

var app = express()

app.use('/', require('./core/app')(config))

exports.app = functions.https.onRequest(app)
