const firebase = require('firebase')
const functions = require('firebase-functions')
const admin = require('firebase-admin')
const apps = {}

const client = firebase.initializeApp({
  apiKey: 'AIzaSyDdpZgjWiBnIo4B8lPYwUygukV2YfAuiLk',
  authDomain: 'tjkpm-site-yng.firebaseapp.com',
  databaseURL: 'https://tjkpm-site-yng.firebaseio.com',
  projectId: 'tjkpm-site-yng',
  storageBucket: 'tjkpm-site-yng.appspot.com',
  messagingSenderId: '970625793163'
})

const server = admin.initializeApp(functions.config().firebase)

apps.default = {
  client,
  server
}

module.exports = apps
