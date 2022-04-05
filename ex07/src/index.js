function randomRangeNumber(minNumber, maxNumber) {
  minNumber = Math.ceil(minNumber);
  maxNumber = Math.floor(maxNumber);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

randomRangeNumber(27, 55);

module.exports = randomRangeNumber;