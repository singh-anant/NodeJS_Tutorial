import http from "http";
import dotenv from "dotenv";
import chalk from "chalk";
import {
  isThisAStaticContent,
  serverStaticContent,
} from "./server-static-content.js";
function handleRequestAndResponse(request, response) {
  const urlString = request.url;
  // console.log(urlString);
  if (urlString === "/") {
    serverStaticContent("index.html", response);
  } else if (isThisAStaticContent(urlString)) {
    serverStaticContent(urlString, response);
  } else {
    console.log("Request Receive", request.url);
    response.write("<h1>Hello Client</h1>");
    response.end();
  }
}
// Load value from .env
dotenv.config();

const server = http.createServer(handleRequestAndResponse); //create a server....
const serverInfo = server.listen(process.env.PORTNO || 3333, (err) => {
  //server has started listening....Available on the port 3333
  if (err) console.log(chalk.red.bold("Server Crashed..."), err);
  else
    console.log(
      chalk.green.bold.underline("Server has started"),
      serverInfo.address().port
    );
});

// chalk use ESM
