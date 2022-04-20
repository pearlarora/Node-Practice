const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("hello world!");
});

//It is an async function so it will keep listening to the same port unless we ask it to stop
server.listen(3000, () => {
  console.log("Server is listening on the port: 3000");
});
