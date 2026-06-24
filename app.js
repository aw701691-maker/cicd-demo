function add(a, b) {
  return a - b; //intentional bug
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, multiply };