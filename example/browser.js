// client
var MuxDemuxSocket = require('../client');

// return `reconnect-core` instance
var con = MuxDemuxSocket(function(mdm) {
  mdm.on('connection', function(mdmStream) {
    mdmStream.on('data', function(data) {
      if (mdmStream.meta === 'server') console.log(data);
    });
  });
});

con.connect('/mdm');
