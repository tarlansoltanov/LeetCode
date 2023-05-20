// Author        : tarlansoltanov
// Title         : Promise Pool
// ID            : 2636
// URL           : https://leetcode.com/problems/promise-pool/
// Difficulty    : Medium
// Language      : TypeScript


type F = () => Promise<any>;

function promisePool(functions: F[], n: number): Promise<any> {
  return new Promise((resolve, reject) => {
    let processCount: number = 0;
    let i: number = 0;
    const helper: Function = () => {
      if (i == functions.length && processCount == 0) resolve(0);
      while (processCount < n && i < functions.length) {
        const current = functions[i]();
        processCount++;
        current.then(() => {
          processCount--;
          helper();
        });
        i++;
      }
    };
    helper();
  });
}

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
