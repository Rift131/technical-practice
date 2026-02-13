const sameFrequency = (num1: number, num2: number): boolean => {
  /**Short-circuit */
  if (String(num1).length !== String(num2).length) return false;

  let freq: Record<string, number> = {};
  /** Build up the count of each numbers appearance.
   * To make each number within the number itself
   * iterable, it must be converted to a string */
  for (const num of String(Math.abs(num1))) {
    /** Math.abs ensured the "-" isn't counted as a character for negative nums */
    freq[num] = (freq[num] || 0) + 1;
  }

  for (const num of String(Math.abs(num2))) {
    if (!freq[num] || freq[num] === 0) return false;
    freq[num] = freq[num] -= 1;
  }
  return true;
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
