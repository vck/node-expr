const os = require('os');
const cluster = require('cluster');
const http = require('http');

var numcpu = os.cpus().length;

if (cluster.isMaster){

   for (let i=0; i < numcpu; i++){
      cluster.fork();
   }
   
   cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.code.signal} died`);
   })

}else{
   http.createServer((req, res) => {
      res.writeHead(200);
      res.end('helooo!');
      console.log(`incoming request handled by ${process.pid}`)
   }).listen(8001);
   
   console.log(`child ${process.pid} started...`);
}

console.log(numcpu);

