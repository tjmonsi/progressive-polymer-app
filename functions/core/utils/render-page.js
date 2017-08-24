const consolidate = require('consolidate')
const minify = require('html-minifier').minify

module.exports = (req, res, status, template, config, data, partials) => {
  if (req.query.data) {
    res.status(status).json({
      status,
      data: Object.assign({}, data, { app: config.app })
    })
  } else {
    consolidate.handlebars(template, Object.assign({}, config, data, { partials }), (err, html) => {
      if (err) {
        return res.status(500).send(err)
      }

      res.status(status).send(config.build.name === 'prod' ? minify(html, {
        caseSensitive: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyCSS: true,
        minifyJS: true,
        preserveLineBreaks: true
      }) : html)
    })
  }
}
