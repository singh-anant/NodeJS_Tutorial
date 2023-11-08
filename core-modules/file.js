const fs = require("fs");
const filePath = "C:/Users/ANANT SINGH/Downloads/ubuntu.iso";
// Read file cannot read very large files...
/* fs.readFile(filePath, (err, buffer) => {
  if (err) console.log(err);
  else console.log(buffer);
}); */

//so we need to do streaming anyway....
const stream = fs.createReadStream(filePath, { highWaterMark: 1024 });
stream.on("open", () => {
  console.log("Stream Open");
});
stream.on("data", (chunk) => {
  console.log(chunk.toString());
});

stream.on("close", () => {
  console.log("Stream Ends");
});
