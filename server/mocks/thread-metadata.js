module.exports = function(app) {
  var express = require('express');
  var threadMetadataRouter = express.Router();
  threadMetadataRouter.get('/', function(req, res) {
    res.send({"threadMetadata":[
      {
        id: 3,
        subject: 'Like the cheese',
        emailCount: 4,
        arrived: '2014-11-16T02:08:36',
        from: 'Cher Pastey'
      },
      {
        id: 1,
        subject: 'Hello',
        emailCount: 1,
        arrived: '2014-11-15T02:18:14',
        from: 'Lovely Cactus'
      },
      {
        id: 2,
        subject: 'Bumface',
        emailCount: 10,
        arrived: '2014-11-15T02:08:36',
        from: 'Cookie Monster'
      },
    ]});
  });
  app.use('/threadMetadata', threadMetadataRouter);
};
