// Author        : tarlansoltanov
// Title         : Add Two Promises
// ID            : 2723
// URL           : https://leetcode.com/problems/add-two-promises/
// Difficulty    : Easy
// Language      : JavaScript


/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return promise1.then(val1 => promise2.then(val2 => val1 + val2))
};

/**
* addTwoPromises(Promise.resolve(2), Promise.resolve(2))
*   .then(console.log); // 4
*/