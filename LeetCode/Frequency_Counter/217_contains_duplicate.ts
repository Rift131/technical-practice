function containsDuplicate(nums: number[]): boolean {
  /** Short circuit */
  if (nums.length === 0) return false;
  /** Empty obj to populate */
  interface numbers {
    [key: number]: number;
  }

  let numCount: numbers = {};
  /** Iteration to populate obj, returning false as soon as second appearance occurs */
  for (const num of nums) {
    numCount[num] ? ++numCount[num] : (numCount[num] = 1);
    if (numCount[num] >= 2) return true;
  }
  /** Return false after iteration */
  return false;
}
