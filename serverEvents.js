const http = require("http");

//Using EventEmitter API
const server = http.createServer();

//Listens and Emits to request event
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(3000, () => {
  console.log("Server is listening on the port: 3000");
});
