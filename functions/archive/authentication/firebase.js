const express = require('express')
const firebase = require('../firebase/apps')
const app = require('../essentials')(express())

app.post('/_auth/firebase', (req, res, next) => {
  console.log(req.cookies)
  firebase.client.default
  .auth()
  .signInWithEmailAndPassword(req.body.email, req.body.password)
  .then((user) => {
    user.getIdToken().then(token => {
      req.headers.authorization = `Bearer ${token}`
      res.set('authorization', `Bearer ${token}`)
      res.cookie('__session', token, { path: '/_auth' })
      next()
    })
  })
}, (req, res) => {
  res.redirect('/authorized')
})

module.exports = app
