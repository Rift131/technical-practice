/**
Given two strings, write a function to determine if the
second string is an anagram of the first. An anagram is
a word, phrase, or name formed by rearranging the
letters of another, such as cinema, formed from iceman.
 */

/** TESTING DATA...
validAnagram('','') // true
validAnagram('aaz','zza') // false
validAnagram('anagram','nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome','awesom') // false
validAnagram('qwerty','qeywrt') // true
validAnagram('texttwisttime','timetwisttext') // true
*/

const isChar = (char) => {
  return char >= "a" && char <= "z"; // Far more efficient than regex
};
/*
// "isAnagram" = boolean returning function
// Approach is the use a build up and tear-down of an object. In an anagram situation
// if we can build up an object with letters and their counts, then we should be 
// able to tear it down with the second string. One loop to build up followed by 
// one loop to tear down. If matches are not found or the two strings aren't equal
// in length, we return false right away.
*/
function isAnagram(str1, str2) {
  // Standardize inputs so they can be compared 1 to 1
  let str1Clean = str1.toLowerCase();
  let str2Clean = str2.toLowerCase();
  // Fast fail Check
  if (str1Clean.length !== str2Clean.length) return false;
  // Set an empty object to build up with loop 1 and then tear down with loop 2
  let str1Chars = {};
  // 1. Loop independently over each string and populate their respective objects
  for (const char of str1Clean) {
    const validChar = isChar(char);
    if (validChar) {
      str1Chars[char] ? str1Chars[char]++ : (str1Chars[char] = 1);
    } else if (!validChar) {
      return false;
    }
  }
  // 2. With the object populated by the first string, if we subtact each occurrence of a letter fromt he second string, the value for each letter should become 0 when we're done iterating. If not, then the two objects do not formulate an anagram
  for (const char of str2Clean) {
    const validChar = isChar(char);
    if (validChar && str1Chars[char]) {
      str1Chars[char] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

/**
 * Tests
 **/
// console.log(isAnagram("texttwisttime", "timetwisttext")); // true
// console.log(isAnagram("rat", "car")); // false
// console.log(isAnagram("rat", "car")); // false
// console.log(isAnagram("text9twisttime", "3time")); // false

console.log(isAnagram("", "")); // true
console.log(isAnagram("aaz", "zza")); // false
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("awesome", "awesom")); // false
console.log(isAnagram("qwerty", "qeywrt")); // true
console.log(isAnagram("texttwisttime", "timetwisttext")); // true
