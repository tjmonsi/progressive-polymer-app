const express = require('express')
// const path = require('path')
const app = express()

app.get('/api/test', (req, res) => {
  res.json({
    ok: true
  })
})

module.exports = app
