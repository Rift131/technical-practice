// async_practice.js

/** What does async keyword do?
 * Declares that the functions response will not be synchronized with other logic. It's response is variable
 * from the time of being called to when it responds. This also allows the use of the "await" keyword which
 * tells the function not to progress until the Promise has been returned. *** "Async" is a technique that
 * enables your program to be responsive to other events while the task runs, tather than having to wait
 * until that task has finished. Once the task is finished, the function is given the result. Examples of
 * this are tasks that access a users camera and/or microphone, making HTTP requests with fetch() or asking
 * a user to select files using showOpenFilePicker().
 *
 * What does "await" do?
 * This keyword ensures that the function will not progress until the promise has been returned. The function
 * effectively pauses until a response for the API call, the promise, is received.
 *
 * What happens if you await a non-promise?
 * I'm not sure that anything negative would happen other than to confuse developers reading the code. *** What
 * actually happens is the execution order changes when you await a non-promise. The code following the "await"
 * is scheduled as a microtask for the next "tick" of the event loop. This means other pending microtasks or
 * synchornous code will run before the awaited function resumes.
 *
 * What's the difference between .then() and await?
 * The .then() method dictates what to do next, after the response is received. Await just ensures that "then()" doesn't
 * try to invoke it's logic before it has data to work with from the API response.
 *
 * How do you handle errors with async/await?
 *
 * The try/catch block is one of the more robust approaches and easiest to read by other developers. It will try the API,
 * async call and if anything goes wrong with the call, the catch block takes over and provides a means of making the
 * error available in the console and allowing the developer to dictate how to handle that error so it doesn't crash
 * the application.
 *
 * You can also chain ".catch()". You append this to the promise returned by an async function.
 *
 * More robust error handling, especially with network requests, implementing retru logic or using AbortController for
 * timeouts can be beneficial.
 *
 * Automatic bubbling: if an error occurs inside an async function and is not caught by a try/catch block, the function
 * returns a rejected promise containing that error. This allows the error to propogate up the promise chain until it is
 * handled.
 *
 * Multiple Operations: Specialized promise methods like "Promise.allSettled()" to wait for all Promises, even if some fail
 * or "Promise.all()" to allow failure to occur immediately if any one promise fails.
 *
 * You can use "finally()" to execure code (like closing a database connection or hiding a loading spinner) regardless of
 * whether the operation sicceeded or failed.
 *
 * Testing the parallel and sequential functions with the same argument, the difference in performance was pretty sizeable:
 *                       Total Parallel duration: 261.0862499475479 ms
 *                       Total Sequential duration: 1936.3084579706192 ms
 */

/** HELPER FUNCTIONS */

const duration = (startTime) => {
  const endTime = performance.now();
  return endTime - startTime;
};

// Example 1: Basic Async/Await
async function fetchUserData(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    response;
    return response;
  } catch (error) {
    console.error("Operation unsuccessful: " + error.message);
    throw error;
  }
}

// Example 2: Sequential vs Parallel
async function fetchMultipleSequential(urls) {
  try {
    const startTime = performance.now();
    for (const url of urls) {
      const response = await fetch(url);
      response;
    }
    console.log(`Total Sequential duration: ${duration(startTime)} ms`);
  } catch (error) {
    console.error("Fetch multiple sequential unsuccessful: " + error.message);
    throw error;
  }
}

async function fetchMultipleParallel(urls) {
  try {
    const startTime = performance.now();
    const fetchPromises = urls.map((url) => fetch(url));
    const sendIt = await Promise.all(fetchPromises);
    console.log(sendIt);
    console.log(`Total Parallel duration: ${duration(startTime)} ms`);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Example 3: Multi-step Error Handling
async function updateOrganization(orgId, newData) {
  // Your code here
}

// Example 4: Array Processing
async function processOrgsSequential(orgIds) {
  // Your code here
}

async function processOrgsParallel(orgIds) {
  // Your code here
}

// Example 5: Timeout & Retry
async function fetchWithTimeout(url, timeoutMs) {
  // Your code here
}

async function fetchWithRetry(url, maxRetries) {
  // Your code here
}

/**
 * Free API's
 */
// For user data
const API_USER = "https://jsonplaceholder.typicode.com/users/1";

// For multiple requests
const API_POSTS = "https://jsonplaceholder.typicode.com/posts";

// For testing errors (this will 404)
const API_ERROR = "https://jsonplaceholder.typicode.com/invalid";

const apis = [
  API_USER,
  API_POSTS,
  API_USER,
  API_USER,
  API_POSTS,
  API_USER,
  API_USER,
  API_POSTS,
  API_USER,
  API_USER,
  API_POSTS,
  API_USER,
  API_USER,
  API_POSTS,
  API_USER,
  API_USER,
  API_POSTS,
  API_USER,
  API_USER,
  API_POSTS,
  API_USER,
  API_USER,
  API_POSTS,
  API_USER,
  API_USER,
  API_POSTS,
  API_USER,
  API_USER,
  API_POSTS,
  API_USER,
  API_USER,
  API_POSTS,
  API_USER,
  API_USER,
  API_POSTS,
  API_USER,
  API_USER,
  API_POSTS,
  API_USER,
  API_USER,
  API_POSTS,
  API_USER,
  API_USER,
  API_POSTS,
  API_USER,
  API_USER,
  API_POSTS,
  API_USER,
  API_USER,
  API_POSTS,
  API_USER,
  API_USER,
  API_POSTS,
  API_USER,
];

// Test your functions. Run with: node asyncAwait_Practice.js
(async () => {
  try {
    console.log("Testing Example 1...");
    await fetchMultipleParallel(apis);

    console.log("Testing Example 2...");
    await fetchMultipleSequential(apis);

    // etc.
  } catch (error) {
    console.error("Test failed:", error);
  }
})();
