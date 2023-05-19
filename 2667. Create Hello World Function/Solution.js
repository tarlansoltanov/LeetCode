// Author        : tarlansoltanov
// Title         : Create Hello World Function
// ID            : 2667
// URL           : https://leetcode.com/problems/create-hello-world-function/
// Difficulty    : Easy
// Language      : JavaScript


/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  }
};

/**
* const f = createHelloWorld();
* f(); // "Hello World"
*/