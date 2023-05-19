// Author        : tarlansoltanov
// Title         : Counter
// ID            : 2620
// URL           : https://leetcode.com/problems/counter/
// Difficulty    : Easy
// Language      : JavaScript


/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

/** 
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/