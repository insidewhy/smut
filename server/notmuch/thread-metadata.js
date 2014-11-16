var express = require('express');
var router = module.exports = express.Router();
var spawn = require('child_process').spawn;

router.get('/', function(req, res) {
  var notmuch = spawn('notmuch', ['search', '--format=json', '--limit=50', 'tag:inbox']);
  res.set('Content-Type', 'application/json');
  res.write('{"threadMetadata":');
  notmuch.stdout.pipe(res, { end: false });
  notmuch.stdout.on('end', function() { res.end('}'); });
});

module.exports = router;
