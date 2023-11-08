function add(x, y) {
  return x + y;
}
console.log("Whole third.js file is loaded and executed...");

const sub = () => x - y;
/*
 *module.exports.add = add;
 *module.exports.sub = sub;
 */
module.exports = { add, sub };
console.log(module.exports);
