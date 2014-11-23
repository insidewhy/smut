var express = require('express')

var app = express()
app.use(express.static(__dirname + '/dist'))
app.listen(4200)

require('./server/index')(app)

app.use('*', function(req, res) { res.sendFile(__dirname + '/dist/index.html') })
