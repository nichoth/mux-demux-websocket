var inject = require('reconnect-core');
var MuxDemux = require('mux-demux');
var shoe = require('shoe');

module.exports = function client(cb) {
  var reconnect = inject(shoe);
  var r = reconnect(function(wsStream) {
    var mdm = MuxDemux();
    cb(mdm);
    wsStream.pipe(mdm).pipe(wsStream);
  });
  return r;
};
