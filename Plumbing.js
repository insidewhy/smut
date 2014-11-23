var all       = require('plumber-all')
var glob      = require('plumber-glob')
var traceur   = require('plumber-traceur')
var concat    = require('plumber-concat')
var write     = require('plumber-write')

module.exports = function(pipelines) {
  var sources = glob.within('app')

  pipelines['compile:js'] = [
    sources('**/*.js'),
    traceur.toAmd({
      getModulePath: function(path) {
        return path.replace(/[^/]+/, 'smut');
      }
    }),
    glob('bootstrap.js'),
    concat('smut'),
    write('dist/assets')
  ]
}
