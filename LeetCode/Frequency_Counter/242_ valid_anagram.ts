function isAnagram(s: string, t: string): boolean {
  /** Short-circuit */
  if (s.length !== t.length) return false;

  interface letters {
    [key: string]: number;
  }

  /** Frequency Counter, build-up & tear down approach */
  let lettersSum: letters = {};
  for (const addLetter of s) {
    lettersSum[addLetter]
      ? lettersSum[addLetter]++
      : (lettersSum[addLetter] = 1);
  }

  for (const subtractLetter of t) {
    if (!lettersSum[subtractLetter] || lettersSum[subtractLetter] === 0) {
      return false;
    } else {
      lettersSum[subtractLetter] -= 1;
    }
  }

  return true;
}
