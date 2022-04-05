function isLess(a, b) {
  if (a < b) {
    return true;
  } else {
      return false;
  }
}

isLess(10, 15);
isLess(15, 10);

module.exports = isLess;