module.exports = function(app) {
  var express = require('express');
  var threadMetadataRouter = express.Router();
  threadMetadataRouter.get('/', function(req, res) {
    res.send({"threadMetadata":[
      {
        thread: '3',
        subject: 'Like the cheese',
        total: 4,
        timestamp: '1416091850',
        authors: 'Lovely Cactus',
        tags: [ 'inbox', 'unread' ]
      },
      {
        thread: '1',
        subject: 'Hello',
        total: 1,
        timestamp: '1416091050',
        authors: 'Cher Pastely',
        tags: [ 'inbox', 'spam' ]
      },
      {
        thread: '2',
        subject: 'Bumface',
        total: 10,
        timestamp: '1416081850',
        authors: 'Cookie Monster',
        tags: [ 'inbox', 'unread' ]
      },
    ]});
  });
  app.use('/api/threadMetadata', threadMetadataRouter);
};
