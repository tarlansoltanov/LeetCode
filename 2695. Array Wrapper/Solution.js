// Author        : tarlansoltanov
// Title         : Array Wrapper
// ID            : 2695
// URL           : https://leetcode.com/problems/array-wrapper/
// Difficulty    : Easy
// Language      : JavaScript


/**
 * @param {number[]} nums
 */
var ArrayWrapper = function (nums) {
  this.arr = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.arr.reduce((acc, k) => acc + k, 0);
}

ArrayWrapper.prototype.toString = function () {
  return `[${this.arr.join(',')}]`;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */