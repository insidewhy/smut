module.exports = function(app) {
  var express = require('express');
  var threadMetadataRouter = express.Router();
  threadMetadataRouter.get('/', function(req, res) {
    res.send({"threadMetadata":[
      {
        id: 1,
        subject: 'Hello',
        arrived: '2014-11-15T02:18:14',
      },
      {
        id: 2,
        subject: 'Bumface',
        arrived: '2014-11-15T02:08:36',
      }
    ]});
  });
  app.use('/threadMetadata', threadMetadataRouter);
};
