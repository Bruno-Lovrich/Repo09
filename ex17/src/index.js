function inverseWhile() {

  var fiveNumbers = "";

  var i = 5;
  
  while(i > 0) {
    fiveNumbers += i + ",";
    i--;
    if (i === 0) {
      fiveNumbers += i;
    }
  }
  return fiveNumbers;
}

console.log(inverseWhile());

module.exports = inverseWhile;