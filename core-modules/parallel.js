const { log } = require("console");
const fs = require("fs"); //Sync
const { buffer } = require("stream/consumers");
console.log(); //Sync
fs.readFile(__filename, (err, buffer) => {
  if (err) console.log(err);
  else console.log(buffer.toString());
}); //Async--->This async line of code will be given to some another thread--libuv has thread pool present

console.log("Code Ends -1");

const path =
  "C:UsersANANT SINGHOneDriveDesktopMernNodeJS_Tutorialcore-modulessimulate-event-loop.js";
fs.readFile(path, (err, buffer) => {
  if (err) console.log("Error in Second file");
  else console.log(buffer.toString());
});
console.log("Code Ends -2");
