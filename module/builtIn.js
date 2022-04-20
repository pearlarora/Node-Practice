//1. OS Module
const os = require("os");

console.log(os.userInfo()); //Info about the current user
console.log(os.uptime()); //Method returns the system uptime

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);

//2. Path Module
const path = require("path");

console.log(path.sep); //Gives the platform specific file separator
//path.join: to join the path correctly
//path.basename: to get the last file/folder in the path
//path.resolve with __dirname: to get the absolute path

//3. File System Module - Sync
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("../content/first.txt", "utf8");
const second = readFileSync("../content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "../content/result.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

//4. File System Module - Async
const { readFile, writeFile } = require("fs");

readFile("../content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("../content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "../content/result.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
