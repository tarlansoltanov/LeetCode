// Author        : tarlansoltanov
// Title         : Flatten Deeply Nested Array
// ID            : 2625
// URL           : https://leetcode.com/problems/flatten-deeply-nested-array/
// Difficulty    : Medium
// Language      : JavaScript


/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  if(n == 0) return arr;
  const res = [];
  for(const i of arr){
    if(Array.isArray(i)){
      flat(i, n - 1).forEach(k => res.push(k));
    } else {
      res.push(i);
    }
  }
  return res;
};