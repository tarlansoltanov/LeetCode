// Author        : tarlansoltanov
// Title         : Promise Pool
// ID            : 2636
// URL           : https://leetcode.com/problems/promise-pool/
// Difficulty    : Medium
// Language      : JavaScript


/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function (functions, n) {
  return new Promise((resolve) => {
    let processCount = 0;
    let index = 0;
    const runner = () => {
      if (processCount == 0 && index == functions.length) resolve(0);
      while (processCount < n && index < functions.length) {
        processCount++;
        functions[index]().then(() => {
          processCount--;
          runner();
        });
        index++;
      }
    }
    runner();
  });
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */