const EventEmitter = require("events"); //EventEmitter is a class
const customEmitter = new EventEmitter(); //Creating an instance of the class EventEmitter to emit an event

customEmitter.on("response", (name, id) => {
  console.log(`data received from ${name} with id: ${id}`);
});
customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

customEmitter.emit("response", "Pearl", 20);
