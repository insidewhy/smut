var all       = require('plumber-all')
var glob      = require('plumber-glob')
var traceur   = require('plumber-traceur')
var concat    = require('plumber-concat')
var write     = require('plumber-write')
var ember_tmplts = require('plumber-ember-template-compiler')

var getModulePath = function(path) {
  return path.replace(/[^/]+/, 'smut');
}

module.exports = function(pipelines) {
  var sources = glob.within('app')

  pipelines['compile:js'] = [
    sources('**/*.js'),
    traceur.toAmd({ getModulePath: getModulePath }),
    glob('bootstrap.js'),
    concat('smut'),
    write('dist/assets')
  ]

  pipelines['compile:hbs'] = [
    sources('**/*.hbs'),
    ember_tmplts({ getModulePath: getModulePath }),
    concat('templates'),
    write('dist/assets')
  ]
}
