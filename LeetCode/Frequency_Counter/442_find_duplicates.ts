function findDuplicates(nums: number[]): number[] {
  if (nums.length <= 1) {
    return [];
  }

  let twice: number[] = [];

  interface numCounts {
    [key: string]: number;
  }

  let numCountObj: numCounts = {};

  /* Setup the object with counts of each numbers 
    occurrence in the array */
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    numCountObj[num] = (numCountObj[num] || 0) + 1;
  }
  /* Iterate over the object to evaluate if the value is
    greater than 1. The key is to remener that creating the
    object converted the numnber to a string so we have to
    convert it back to a number type when evaluating it and 
    when we push it into our array when the criteria is met. */
  Object.keys(numCountObj).forEach((key) => {
    if (numCountObj[Number(key)] > 1) {
      twice.push(Number(key));
    }
  });

  return twice;
}
