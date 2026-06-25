function add(a, b) {
  return a + b; 
}

function multiply(a, b) {
  return a / b; //intetional bug
}

module.exports = { add, multiply };