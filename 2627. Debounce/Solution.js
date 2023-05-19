// Author        : tarlansoltanov
// Title         : Debounce
// ID            : 2627
// URL           : https://leetcode.com/problems/debounce/
// Difficulty    : Medium
// Language      : JavaScript


/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn(...args);
    }, t);
  }
};

/**
* const log = debounce(console.log, 100);
* log('Hello'); // cancelled
* log('Hello'); // cancelled
* log('Hello'); // Logged at t=100ms
*/