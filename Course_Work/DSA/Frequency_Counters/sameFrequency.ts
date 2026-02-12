const sameFrequency = (num1: number, num2: number): boolean => {
  return false;
};

const assertEquals = (
  actual: boolean,
  expected: boolean,
  testName: string,
): boolean => {
  return false;
};

/** Command to run: node Course_Work/DSA/Frequency_Counters/sameFrequency.ts */
const isHundredsTrue = sameFrequency(182, 281);
console.log(assertEquals(isHundredsTrue, true, "isHundredsTrue"));
const isTensFalse = sameFrequency(34, 14);
console.log(assertEquals(isTensFalse, false, "isTensFalse"));
const isMillionsTrue = sameFrequency(3589578, 5879385);
console.log(assertEquals(isMillionsTrue, true, "isMillionsTrue"));
const isTenAndHundredFalse = sameFrequency(22, 222);
console.log(assertEquals(isTenAndHundredFalse, true, "isTenAndHundredFalse"));
