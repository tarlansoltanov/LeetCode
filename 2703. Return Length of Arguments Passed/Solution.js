// Author        : tarlansoltanov
// Title         : Return Length of Arguments Passed
// ID            : 2703
// URL           : https://leetcode.com/problems/return-length-of-arguments-passed/
// Difficulty    : Easy
// Language      : JavaScript


/**
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */