const { createReadStream } = require("fs");
const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000, //Control size of buffer
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});
