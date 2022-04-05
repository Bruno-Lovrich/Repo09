function myEqualFunction(num) {
  if(num === 23) {
    return "Equal";
  }
  return "Not equal";
}

myEqualFunction(5);
myEqualFunction(23);
myEqualFunction("23");
myEqualFunction('23');
myEqualFunction("text");

module.exports = myEqualFunction;