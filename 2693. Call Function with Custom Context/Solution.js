// Author        : tarlansoltanov
// Title         : Call Function with Custom Context
// ID            : 2693
// URL           : https://leetcode.com/problems/call-function-with-custom-context/
// Difficulty    : Medium
// Language      : JavaScript


/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function (context, ...args) {
  return this.call(context, ...args);
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */