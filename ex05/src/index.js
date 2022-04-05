function compareStrictValues(m) {
  if (m != 55) {
    return "Not equal";
  }
  return "Equal";
}

compareStrictValues(55);
compareStrictValues("55");
compareStrictValues("21");
compareStrictValues(12);
compareStrictValues("Doe");

module.exports = compareStrictValues;