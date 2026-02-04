/** Implement a function called "countUniqueValues", which
 * accepts a sorted array and counts the unique values in
 * the array. There can be negative numbers in the array,
 * but it will always be sorted.
 */

/** Intended approach: Use the array itself to store the unique values.
 * There's nothing in the task that says you can't and most similar
 * leetcode problems allow you to / expect you to do this. Use one
 * pointer as a reader and one as a writer. The reader pointer must
 * be moved to where the value being read needs to be written BEFORE
 * you write it.
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
