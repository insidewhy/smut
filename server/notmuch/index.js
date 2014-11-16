var app = require('express')();

app.use('/threadMetadata', require('./thread-metadata'));

app.listen(4201);
