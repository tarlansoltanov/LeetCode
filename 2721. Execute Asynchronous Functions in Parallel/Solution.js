// Author        : tarlansoltanov
// Title         : Execute Asynchronous Functions in Parallel
// ID            : 2721
// URL           : https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/
// Difficulty    : Medium
// Language      : JavaScript


/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
  return new Promise(
    (resolve, reject) => {
      if (functions.length === 0) {
        resolve([]);
        return;
      }

      const result = new Array(functions.length).fill(null);
      let count = 0;

      functions.forEach(async (e, i) => {
        await e()
          .then((res) => {
            result[i] = res;
          })
          .catch((err) => reject(err));
        count++;
        if (count === functions.length) resolve(result);
      })
    }
  )
};
