const events = require("events");
const event = new events.EventEmitter();
// Thats an event listener
event.on("ring", (value) => {
  console.log("RING1 RING1.....", value);
});
event.on("ring", (value) => {
  console.log("RING2 RING2.....", value);
});
console.log(events);

// This is an event firing
console.log("Event going to be fire");
event.emit("ring", "Nothing"); //({name of event},{values})d
event.emit("ring", "Iphone"); //({name of event},{values})
event.emit("ring", "POCO"); //({name of event},{values})
