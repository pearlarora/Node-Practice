//Started operating system process
console.log("first");

//setTimeout is asynchronous i.e., they get offloaded
setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");
//Completed and exited the operating system process
