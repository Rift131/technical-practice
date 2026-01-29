/**
Given two strings, write a function to determine if the
second string is an anagram of the first. An anagram is
a word, phrase, or name formed by rearranging the
letters of another, such as cinema, formed from iceman.
 */

/**
validAnagram('','') // true
validAnagram('aaz','zza') // false
validAnagram('anagram','nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome','awesom') // false
validAnagram('qwerty','qeywrt') // true
validAnagram('texttwisttime','timetwisttext') // true
*/

function isAnagram(str1, str2) {
  // First setup short-circuits
  // Set an empty object for each string
  // 1. Loop independently over each string and populate their respective objects
  // 2. Each letter is a key, the value is set to how many times it appears
  /** With the objects populated, look at each property of object 1 and confirm it has a match in object two. If not, short-circuit to false. Otherwise keep iterating and return 
true. **/
}
