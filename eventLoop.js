const { readFile } = require("fs"); //Async version of readFile method

console.log("Reading the first file");

//Event loop will run the readFile method and until it gets the result back it will offload this method and go to the next task
//Once it gets the response be it error or result, then only event loop will invoke the callback(a function passed to another function)
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result); //Event loop offloads this and goes to the next task
  console.log("First file ended");
});

console.log("Reading the second file");

readFile("./content/second.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("Second file ended");
});

console.log("Starting the next task");
