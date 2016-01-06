var MuxDemux = require('mux-demux');
var shoe = require('shoe');

module.exports = function mdmsServer(cb) {
  var sock = shoe(function(wsStream) {
    var mdm = MuxDemux();
    cb(mdm);
    wsStream.pipe(mdm).pipe(wsStream);
  });
  return sock;
}
