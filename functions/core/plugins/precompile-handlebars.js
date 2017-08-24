var through = require('through2')
var handlebars = require('handlebars')

module.exports = function precompile (obj) {
  function precompileHandlebars (file, enc, done) {
    var settings = obj || file.frontMatter
    file.contents = Buffer.from(handlebars.precompile(file.contents.toString('utf8')), settings)
    // file.contents = new Buffer()
    file.defineModuleOptions = {
      require: {
        Handlebars: 'handlebars/runtime.js'
      },
      context: {
        handlebars: 'Handlebars.template(<%= contents %>)'
      },
      wrapper: '<%= handlebars %>'
    }
    done(null, file)
  }

  return through.obj(precompileHandlebars)
}
