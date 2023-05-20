// Author        : tarlansoltanov
// Title         : Curry
// ID            : 2632
// URL           : https://leetcode.com/problems/curry/
// Difficulty    : Medium
// Language      : JavaScript


/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn) {
  return function curried(...args) {
    if (fn.length <= args.length) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */