// Author        : tarlansoltanov
// Title         : Apply Transform Over Each Element in Array
// ID            : 2635
// URL           : https://leetcode.com/problems/apply-transform-over-each-element-in-array/
// Difficulty    : Easy
// Language      : JavaScript


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i], i));
  }
  return newArray;
};