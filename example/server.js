var MuxDemuxSocket = require('../server');
var ecstatic = require('ecstatic')(__dirname+'/public');
var http = require('http');

// server
var server = http.createServer(ecstatic);
server.listen(8000);
console.log('listening on :8000');

// return `shoe` instance
var sock = MuxDemuxSocket(function(mdm) {
  var stream = mdm.createWriteStream('server');
  stream.write('some content');
});
sock.install(server, '/mdm');


