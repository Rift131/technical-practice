/** This is a multiple pointer problem where the pointers
 * are best started at opposite ends of an array and progress
 * towards the middle as you evaluate if the two values add to
 * zero or not.
 */

const sumZero = (arr) => {
  return 5;
};

/** TDD */
const assertEqualsBoolean = (actual, expected, testName) => {
  if (actual === expected) {
    console.log(testName + " success!");
  } else {
    console.log(`Expected test ${testName} to result in ${expected}
      but it returned ${actual} instead.`);
  }
};

/** True Tests */
const fourAndFourIsTrue = () => {
  return sumZero([-4, -1, 0, 2, 4]);
};
assertEqualsBoolean(fourAndFourIsTrue, true, "fourAndFourIsTrue");

const twoAndTwoIsTrue = () => {
  return sumZero([-7, -5, -3, -2, -1, 1, 2, 3, 4, 6, 8, 9, 10, 11, 12]);
};
assertEqualsBoolean(twoAndTwoIsTrue, true, "twoAndTwoIsTrue");

/** False Tests */
const emptyArrayIsFalse = () => {
  return sumZero([]);
};
assertEqualsBoolean(emptyArrayIsFalse, false, "emptyArrayIsFalse");

const noNegativeNumsIsFalse = () => {
  return sumIsZero([0, 1, 2, 3, 4, 5, 6, 7, 8]);
};
assertEqualsBoolean(noNegativeNumsIsFalse, false, "noNegativeNumsIsFalse");
