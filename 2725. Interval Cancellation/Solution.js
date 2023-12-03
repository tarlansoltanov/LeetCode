// Author        : tarlansoltanov
// Title         : Interval Cancellation
// ID            : 2725
// URL           : https://leetcode.com/problems/interval-cancellation/
// Difficulty    : Easy
// Language      : JavaScript


/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  fn(...args);

  const timer = setInterval(() => { fn(...args) }, t);

  const cancelFn = () => {
    clearInterval(timer);
  }

  return cancelFn;
};