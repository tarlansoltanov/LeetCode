// Author        : tarlansoltanov
// Title         : Array Reduce Transformation
// ID            : 2626
// URL           : https://leetcode.com/problems/array-reduce-transformation/
// Difficulty    : Easy
// Language      : JavaScript


/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};