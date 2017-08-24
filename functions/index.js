const functions = require('firebase-functions')
const app = require('./core')

exports.app = functions.https.onRequest(app)
