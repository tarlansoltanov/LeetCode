// Author        : tarlansoltanov
// Title         : Is Object Empty
// ID            : 2727
// URL           : https://leetcode.com/problems/is-object-empty/
// Difficulty    : Easy
// Language      : JavaScript


/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  return Object.keys(obj).length === 0;
};