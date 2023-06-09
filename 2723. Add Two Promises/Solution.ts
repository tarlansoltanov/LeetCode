// Author        : tarlansoltanov
// Title         : Add Two Promises
// ID            : 2723
// URL           : https://leetcode.com/problems/add-two-promises/
// Difficulty    : Easy
// Language      : TypeScript


async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
  return promise1.then((val1) => promise2.then((val2) => val1 + val2));
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
