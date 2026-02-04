/** Implement a function called "countUniqueValues", which
 * accepts a sorted array and counts the unique values in
 * the array. There can be negative numbers in the array,
 * but it will always be sorted.
 */

const countUniqueValues = (arr) => {
  return;
};

/** TDD */
const assertEqualsNum = (actual, expected, testName) => {
  if (actual === expected) {
    console.log(testName + " success!");
  } else {
    console.log(
      `Expected ${expected}, however the result of the ${testName} test resulted in ${actual}`,
    );
  }
};

const isTwo = () => {
  return countUniqueValues([1, 1, 1, 1, 1, 2]);
};
assertEqualsNum(isTwo, 2, "isTwo");

const isSeven = () => {
  return countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
};
assertEqualsNum(isSeven, 7, "isSeven");

const isZero = () => {
  return countUniqueValues([]);
};
assertEqualsNum(isZero, 7, "isSeven");

const isFour = () => {
  return countUniqueValues([-2, , -1, -1, 0, 1]);
};
assertEqualsNum(isFour, 4, "isFour");
