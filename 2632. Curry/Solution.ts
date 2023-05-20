// Author        : tarlansoltanov
// Title         : Curry
// ID            : 2632
// URL           : https://leetcode.com/problems/curry/
// Difficulty    : Medium
// Language      : TypeScript


function curry(fn: Function): Function {
  return function curried(...args: any) {
    if (args.length < fn.length) {
      return (...nextArgs: any) => curried(...args, ...nextArgs);
    }
    return fn(...args);
  };
}

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
