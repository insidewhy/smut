var all, glob, traceur, concat, write, ember_templates

var getModulePath = function(path) {
  return path.replace(/[^/]+/, 'smut');
}

module.exports = function(pipelines) {
  pipelines['compile:js'] = [
    all(
      [ glob('app/**/*.js'), traceur({ getModulePath: getModulePath }) ],
      [ glob('app/**/*.hbs'), ember_templates({ getModulePath: getModulePath }) ],
      glob('bootstrap.js')
    ),
    concat('smut.js'),
    write('dist/assets')
  ]
}

