/* 
exports.add = function add(x, y) {
  return x + y;
};

exports.sub = function sub(x, y) {
  return x - y;
};
console.log(module.exports);
console.log(exports);
 */
const add = function add(x, y) {
  return x + y;
};

const sub = function sub(x, y) {
  return x - y;
};

exports = { add, sub };
console.log(exports);
console.log(module.exports);
