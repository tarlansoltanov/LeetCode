// Author        : tarlansoltanov
// Title         : Timeout Cancellation
// ID            : 2715
// URL           : https://leetcode.com/problems/timeout-cancellation/
// Difficulty    : Easy
// Language      : JavaScript


/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  const timer = setTimeout(() => { fn(...args) }, t);

  const cancelFn = () => {
    clearTimeout(timer);
  }

  return cancelFn;
};