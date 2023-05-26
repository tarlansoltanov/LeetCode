// Author        : tarlansoltanov
// Title         : Chunk Array
// ID            : 2677
// URL           : https://leetcode.com/problems/chunk-array/
// Difficulty    : Easy
// Language      : JavaScript


/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
  const res = [];

  for(let i = 0; i < arr.length; i += size){
    res.push(arr.slice(i, i + size));
  }

  return res;
};
