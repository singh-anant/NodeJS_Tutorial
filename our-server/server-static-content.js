import fs from "fs";
import { __dirname } from "./absolute-path.js";
import path from "path";
export function serverStaticContent(urlString, response) {
  // We will be needing whole path/absolute path...
  // console.log(__dirname);//will get the path of the current directory
  const rootDIR = __dirname;
  const fullPath = path.join(rootDIR, "/public1", urlString); //automatically handles the path by using its intelligence...
  console.log(fullPath);
  const stream = fs.createReadStream(fullPath);
  stream.pipe(response);
}

export function isThisAStaticContent(urlString) {
  const extensions = [
    ".css",
    ".js",
    ".html",
    ".jpeg",
    ".png",
    ".jpg",
    ".ico",
    ".jsx",
    ".json",
    ".txt",
    ".map",
  ];
  const rootDIR = __dirname;
  const fullPath = path.join(rootDIR, "/public1", urlString);
  //index.html,images/xyz.png
  const ext = path.extname(fullPath);
  return extensions.indexOf(ext) >= 0;
}
