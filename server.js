import http from 'http';

const server = http.createServer((req, res) => {
    console.log("Request received in the backend!");
    let randomNumber = Math.floor(Math.random() * 100);
    res.end(randomNumber.toString());
  
})

server.listen(8081);