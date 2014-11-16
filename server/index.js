function mockServer(app) {
  var globSync   = require('glob').sync;
  var bodyParser = require('body-parser');
  var mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  mocks.forEach(function(route) { route(app); });

  // proxy expects a stream, but express will have turned
  // the request stream into an object because bodyParser
  // has run. We have to convert it back to stream:
  // https://github.com/nodejitsu/node-http-proxy/issues/180
  app.use(require('connect-restreamer')());
  proxies.forEach(function(route) { route(app); });
}

module.exports = function(app) {
  var serverEnv = process.env.EMBER_ENV;
  console.log("server env:", serverEnv );
  if (serverEnv === 'test' || serverEnv === 'mock') {
    mockServer(app);
    return;
  }
  else {
    // TODO: start sub-process, watch directory etc.
    var proxy = require('express-http-proxy');
    app.use('/api', proxy('localhost:4201'));
  }
};
