// const sameFrequency = (num1: number, num2: number): boolean => {
//   /**Short-circuit */
//   if (String(num1).length !== String(num2).length) return false;

//   let freq: Record<string, number> = {};
//   /** Build up the count of each numbers appearance.
//    * To make each number within the number itself
//    * iterable, it must be converted to a string */
//   for (const num of String(Math.abs(num1))) {
//     /** Math.abs ensured the "-" isn't counted as a character for negative nums */
//     freq[num] = (freq[num] || 0) + 1;
//   }

//   for (const num of String(Math.abs(num2))) {
//     if (!freq[num] || freq[num] === 0) return false;
//     freq[num] = freq[num] -= 1;
//   }
//   return true;
// };

/** Same function but using .map() as the approach */
const sameFrequency = (num1: number, num2: number): boolean => {
  /** Short circuit */
  if (String(num1).length !== String(num2).length) return false;
  /** Map over num1  */
  const normalize = (n: number): string => {
    return (
      Array.from(String(n)) // First we make the number iterable but turning it into a string
        .map(Number) // Second, we convert the immutable string back into a number so we can use map and sort (sorting on numbers is safer than on strings, especially if you need to do anything mathmatical to a value before it's sorted)
        /** We use (a, b) => a - b because the default .sort() in JS/TS converts everything to strings and sorts them alphabetically (where "10" comes before "2"). Using a comparator function ensures 1 comes before 2. */
        .sort((a, b) => a - b) // Most expensive piece of this helper function, O(n log n)
        /** This is the most counter-intuitive step. In TypeScript, if you compare two arrays like this: [1,2,3] === [1,2,3], the result is false. This is because TypeScript compares the reference (where they sit in memory), not the content.
The Fix: By joining the digits back into a single string (e.g., "123"), we can use the === operator to compare the actual values. Strings are compared by their content, making the final check reliable. */
        .join("")
    );
  };
  console.log("FIRST: " + normalize(Math.abs(num1)));
  console.log("SECOND: " + normalize(Math.abs(num2)));
  return normalize(Math.abs(num1)) === normalize(Math.abs(num2));
};

const assertEquals = (
  actual: boolean,
  expected: boolean,
  testName: string,
): boolean => {
  if (actual === expected) {
    console.log(`${testName} passed!`);
    return true;
  } else {
    console.log(
      `${testName} was expected to result in ${expected} but resulted in ${actual}.`,
    );
    return false;
  }
};

/** Command to run: node Course_Work/DSA/Frequency_Counters/sameFrequency.ts */
const isHundredsTrue = sameFrequency(182, 281);
console.log(assertEquals(isHundredsTrue, true, "isHundredsTrue"));
const isTensFalse = sameFrequency(34, 14);
console.log(assertEquals(isTensFalse, false, "isTensFalse"));
const isMillionsTrue = sameFrequency(3589578, 5879385);
console.log(assertEquals(isMillionsTrue, true, "isMillionsTrue"));
const isTenAndHundredFalse = sameFrequency(22, 222);
console.log(assertEquals(isTenAndHundredFalse, false, "isTenAndHundredFalse"));
