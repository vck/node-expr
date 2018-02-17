var net = require('net');

var s = net.createServer(function(sock){
         sock.on('data', function(data){
            sock.write(data);
         })
      })

s.listen(9000)

