// Author        : tarlansoltanov
// Title         : Throttle
// ID            : 2676
// URL           : https://leetcode.com/problems/throttle/
// Difficulty    : Medium
// Language      : JavaScript


/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function (fn, t) {
  let timeout = null;
  let vals = null;

  const runner = () => {
    if (vals == null) {
      timeout = null;
    } else {
      fn(...vals);
      vals = null;
      timeout = setTimeout(runner, t);
    }
  }

  return function (...args) {
    if (timeout) {
      vals = args;
    } else {
      fn(...args);
      timeout = setTimeout(runner, t);
    }
  }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */