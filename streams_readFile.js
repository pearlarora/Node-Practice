const { createReadStream } = require("fs");
const stream = createReadStream("./content/bigF.txt", {
  highWaterMark: 90000, //Control size of buffer
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
