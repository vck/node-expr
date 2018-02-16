var http = require('http');

function boom(addr, intrv){
   setInterval(function(){
      http.get(addr)
   }, intrv)
}


boom('http://localhost:8001', 1000)


