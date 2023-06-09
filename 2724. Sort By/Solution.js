// Author        : tarlansoltanov
// Title         : Sort By
// ID            : 2724
// URL           : https://leetcode.com/problems/sort-by/
// Difficulty    : Easy
// Language      : JavaScript


/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};