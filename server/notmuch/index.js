var app = require('express')();

app.use('/threadMetadata', require('./thread-metadata'));

console.log('notmuch api server listening');
app.listen(4201);
