# How to Approach LeetCode Problems - A Practical Guide

## Your Current Blockers (And How to Fix Them)

### Blocker 1: Confusing Problem Descriptions
**Problem:** LeetCode problems are often poorly worded, ambiguous, and assume unstated constraints.

**Solution:** Use a systematic reading process (see below)

### Blocker 2: Output Rendering Confusion  
**Problem:** LeetCode wraps your code in test harnesses that format output differently than your code does.

**Solution:** Code and test locally first, then submit to LeetCode (see workflow below)

---

## The 7-Step LeetCode Approach

### Step 1: Read the Problem Multiple Times (5 min)

**First read:** Get the gist - what is this asking?

**Second read:** Identify:
- Input format (array? string? number?)
- Output format (return what type?)
- Constraints (array length? number range?)
- Edge cases mentioned

**Third read:** Look for hints:
- Keywords like "sorted," "unique," "contiguous"
- Time/space complexity requirements
- Example patterns

**Example: Two Sum**
- Input: array of integers + target integer
- Output: array of two indices
- Constraint: exactly one solution exists
- Hint: "in less than O(n²)" suggests hashmap

---

### Step 2: Analyze the Examples (5 min)

LeetCode always provides examples. **Work through them by hand.**

**For each example, ask:**
- Why is this the expected output?
- What's the relationship between input and output?
- Are there patterns in the examples?

**Example: Valid Anagram**
```
Input: s = "anagram", t = "nagaram"
Output: true

Why? Both strings have:
- 3 a's
- 1 n
- 1 g
- 1 r
- 1 m

Pattern recognized: Frequency Counter!
```

---

### Step 3: Identify the Pattern (2 min)

Based on Colt Steele's course, ask:

**Frequency Counter?**
- Comparing character/element frequencies?
- Keywords: "anagram," "duplicate," "occurrence"

**Two Pointers?**
- Working with sorted data?
- Need to compare elements at different positions?
- Keywords: "sorted," "pairs," "triplets"

**Sliding Window?**
- Looking for contiguous subarrays/substrings?
- Need to track a "window" of elements?
- Keywords: "substring," "subarray," "consecutive"

**Divide & Conquer?**
- Can break problem into smaller subproblems?
- Keywords: "recursion," "merge," "split"

**If unsure:** Default to brute force approach, then optimize

---

### Step 4: Write Pseudocode (5 min)

**Before writing any JavaScript, write plain English steps.**

**Example: Two Sum**
```
Pseudocode:
1. Create empty hashmap
2. For each number in array:
   a. Calculate complement (target - current number)
   b. Check if complement exists in hashmap
   c. If yes: return [complement index, current index]
   d. If no: store current number and index in hashmap
3. Return empty array (no solution found)
```

**This clarifies thinking before coding.**

---

### Step 5: Code Locally First (10-20 min)

**Critical: Don't code in LeetCode editor yet.**

**In your own file (VS Code, etc.):**

```javascript
// two-sum.js

function twoSum(nums, target) {
  // Your solution here
}

// Test with LeetCode's examples
console.log(twoSum([2,7,11,15], 9));  // Expected: [0,1]
console.log(twoSum([3,2,4], 6));      // Expected: [1,2]
console.log(twoSum([3,3], 6));        // Expected: [0,1]

// Test edge cases
console.log(twoSum([1,2], 3));        // Expected: [0,1]
console.log(twoSum([-1,-2,-3], -5));  // Expected: [1,2]
```

**Why this works:**
- You see actual output (not LeetCode's wrapper)
- You can console.log debug freely
- You understand what your code does
- No pressure from LeetCode timer

---

### Step 6: Debug Until It Works Locally (5-10 min)

**Common debugging tactics:**

**1. Console.log everything:**
```javascript
function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    console.log(`i: ${i}, nums[i]: ${nums[i]}`); // See iteration
    
    const complement = target - nums[i];
    console.log(`complement: ${complement}`); // See calculation
    
    if (map.has(complement)) {
      console.log(`Found! complement index: ${map.get(complement)}`);
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
    console.log(`map after iteration ${i}:`, map); // See state
  }
  
  return [];
}
```

**2. Test one case at a time:**
- Start with simplest example
- Add complexity gradually
- Isolate where it breaks

**3. Check off-by-one errors:**
- Array indices (0-indexed?)
- Loop conditions (< vs <=)
- Slice/substring ranges

---

### Step 7: Submit to LeetCode (2-5 min)

**Once working locally:**

1. Copy your code to LeetCode editor
2. Remove console.logs (they slow down execution)
3. Click "Run" to test against examples
4. If fails, compare:
   - Expected output
   - Actual output
   - What's different?

**If it worked locally but fails on LeetCode:**

**Common reasons:**
- Edge case you didn't test locally
- Time limit exceeded (need optimization)
- Memory limit exceeded (need less space)
- Wrong return type (returning undefined?)

**Don't panic - this is normal. Debug by:**
- Reading error message carefully
- Adding the failing test case to your local tests
- Fixing locally, then resubmit

---

## Understanding LeetCode's Output Rendering

### Why Your Output Looks Wrong

**What you wrote:**
```javascript
function twoSum(nums, target) {
  // ... your logic
  return [0, 1];
}
```

**What LeetCode actually runs:**
```javascript
// LeetCode's test harness (you don't see this)
const result = twoSum([2,7,11,15], 9);
console.log(JSON.stringify(result)); // They format it
// Compares to expected: [0,1]
```

**Your confusion happens when:**
- You console.log intermediate steps
- LeetCode shows those logs mixed with test output
- Formatting makes it look like your return value is wrong

**Solution:** Remove all console.logs before submitting

---

## Pattern Recognition Cheat Sheet

### Frequency Counter Pattern

**Use when:**
- Comparing frequencies of elements
- Checking if two things are anagrams/permutations
- Finding duplicates or unique elements
- Counting occurrences

**Keywords to look for:**
- "anagram"
- "frequency"
- "occurrence"
- "duplicate"
- "unique"
- "character count"

**Data structure:** Object or Map

**Example problems:**
- Valid Anagram (#242)
- Contains Duplicate (#217)
- Group Anagrams (#49)

---

### Two Pointers Pattern

**Use when:**
- Array/string is sorted
- Need to find pairs/triplets
- Comparing elements at different positions
- Need to work inward/outward from ends

**Keywords to look for:**
- "sorted array"
- "two sum" (when sorted)
- "palindrome"
- "pairs"
- "left and right"

**Data structure:** Array with two index pointers

**Example problems:**
- Two Sum II - Input Array Is Sorted (#167)
- Valid Palindrome (#125)
- Remove Duplicates from Sorted Array (#26)

---

### Sliding Window Pattern

**Use when:**
- Finding contiguous subarray/substring
- Need to track a "window" of elements
- Optimization problem (max/min of window)

**Keywords to look for:**
- "substring"
- "subarray"
- "consecutive"
- "contiguous"
- "window"
- "longest"
- "shortest"

**Data structure:** Array/string with start/end pointers

**Example problems:**
- Maximum Subarray (#53)
- Longest Substring Without Repeating Characters (#3)
- Minimum Window Substring (#76)

---

## Common LeetCode Pitfalls (And How to Avoid Them)

### Pitfall 1: Not Reading Constraints

**Problem:** You miss important details in the problem statement.

**Example:**
```
Constraints: 2 <= nums.length <= 10^4
```
This tells you:
- Array always has at least 2 elements (no empty array check needed)
- Could be up to 10,000 elements (O(n²) might be too slow)

**Solution:** Always read "Constraints" section carefully

---

### Pitfall 2: Assuming Things Not Stated

**Bad assumption:** "The array is sorted"  
**Reality:** Only sorted if explicitly stated

**Bad assumption:** "All numbers are positive"  
**Reality:** Could have negatives unless stated otherwise

**Solution:** Test with edge cases that challenge assumptions

---

### Pitfall 3: Not Testing Edge Cases

**Always test:**
- Empty inputs (if allowed by constraints)
- Single element
- All same elements
- All different elements
- Negative numbers
- Zero
- Very large/small numbers (within constraints)

---

### Pitfall 4: Optimizing Too Early

**Wrong approach:**
1. Read problem
2. Immediately try to write optimal solution
3. Get stuck

**Right approach:**
1. Read problem
2. Write brute force solution that works
3. Then optimize if needed

**Remember:** A working O(n²) solution beats a broken O(n) attempt

---

## Your Weekly LeetCode Workflow

### Phase 1: Learn Pattern (Monday-Friday, Colt Steele)
- Watch pattern lecture
- Code along with demonstration
- Take notes on when to use pattern

### Phase 2: Analyze Problems (Thursday)
- Choose 3 LeetCode easy problems
- Read them carefully
- Identify which pattern they need
- Write pseudocode (don't solve yet)

### Phase 3: Solve Problems (Weekend)
- Pick 2-3 problems you analyzed
- Code locally first
- Test with examples
- Debug until working
- Submit to LeetCode

**Goal:** 2-3 problems solved per week (not 20)

**Quality over quantity** - understanding one problem deeply beats rushing through ten.

---

## Troubleshooting Guide

### "I don't know which pattern to use"

**Try this decision tree:**

1. Is input sorted? → Try Two Pointers
2. Need to count/compare frequencies? → Try Frequency Counter
3. Looking for contiguous elements? → Try Sliding Window
4. None of the above? → Start with brute force

### "My solution works locally but fails on LeetCode"

**Check:**
1. Did you remove all console.logs?
2. Are you handling all edge cases from constraints?
3. Is your time complexity acceptable? (Check constraints for hints)
4. Are you returning the correct type? (array vs single value vs modified input)

### "I'm stuck and can't figure it out"

**After 30 minutes stuck:**
1. Look at LeetCode's "Hint" section (if available)
2. Check discussion tab for approaches (not solutions)
3. Watch a tutorial on the specific problem
4. **Important:** Still code the solution yourself after understanding

Don't copy-paste solutions - you won't learn.

### "LeetCode says 'Time Limit Exceeded'"

**Your algorithm is too slow. Optimize by:**
1. Identify your current time complexity (O(n²)? O(n³)?)
2. See if pattern can reduce it (hashmap often helps)
3. Check if you're doing unnecessary repeated work
4. Consider: Can you solve in one pass instead of multiple?

---

## Recommended Easy Problems for Week 2-4

### Week 2: Frequency Counter Focus
1. Contains Duplicate (#217) - Simplest frequency counter
2. Valid Anagram (#242) - Classic frequency counter
3. Two Sum (#1) - Hashmap application

### Week 3: Two Pointers Focus
1. Valid Palindrome (#125) - Two pointers from ends
2. Remove Duplicates from Sorted Array (#26) - Two pointers in-place
3. Merge Sorted Array (#88) - Two pointers comparison

### Week 4: Sliding Window Focus  
1. Maximum Subarray (#53) - Sliding window variant
2. Best Time to Buy and Sell Stock (#121) - Sliding window thinking
3. Longest Substring Without Repeating Characters (#3) - Classic sliding window

---

## Final Tips

✅ **Do:**
- Read problem 3 times before coding
- Write pseudocode first
- Code locally and test thoroughly
- Remove console.logs before submitting
- Understand why solution works, not just that it works

❌ **Don't:**
- Jump into coding immediately
- Code directly in LeetCode editor
- Copy-paste solutions
- Give up after 5 minutes
- Worry about optimal solution on first attempt

---

## Remember

**LeetCode is a skill that requires practice.** 

Just like learning n8n took 8 weeks, learning to solve LeetCode problems efficiently takes time. 

**Week 2 goal:** Solve 2-3 problems using systematic approach

**Week 4 goal:** Solve 5-6 problems with less struggle

**Week 8 goal:** Solve 10+ problems, recognize patterns quickly

**You're building a skill, not cramming for a test.**

Take it step by step. You've got this.
