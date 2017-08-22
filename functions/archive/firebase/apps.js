const firebase = require('firebase')
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

apps.client = {
  default: client
}

apps.admin = {}

module.exports = apps
