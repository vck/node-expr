var http = require('http');

function boom(addr, nums){
   for(var i=0; i<nums; i++){
      http.get(addr);
      console.log(`${addr - i}`)
   }
}


boom('http://localhost:8001', 100000)


