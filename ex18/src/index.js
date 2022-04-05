function myForLoop1() {

  var evenNumbers = "";

  for (var i = 0; i < 10; i++) {
    if ((i % 2) == 0 && i < 8) {
      evenNumbers += i + ", ";
    } else if (i === 8) {
      evenNumbers += i;
    }
  }
  return evenNumbers;
}

function myForLoop2() {

  var evenInverseNumbers = "";

  for (var i = 8; i >= 0; i--) {
    if ((i % 2) == 0 && i > 0) {
      evenInverseNumbers += i + ", ";
    } else if (i === 0) {
      evenInverseNumbers += i;
    }
  }
  return evenInverseNumbers;
}

myForLoop1();
myForLoop2();

module.exports = {
  myForLoop1,
  myForLoop2
};