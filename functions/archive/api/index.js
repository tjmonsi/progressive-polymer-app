const express = require('express')
// const path = require('path')
const app = require('../essentials')(express())

app.get('/api/', (req, res) => {
  res.json({
    ok: true
  })
})

module.exports = app
