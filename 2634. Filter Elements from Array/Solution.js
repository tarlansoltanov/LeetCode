// Author        : tarlansoltanov
// Title         : Filter Elements from Array
// ID            : 2634
// URL           : https://leetcode.com/problems/filter-elements-from-array/
// Difficulty    : Easy
// Language      : JavaScript


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) newArray.push(arr[i]);
  }
  return newArray;
};