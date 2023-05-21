// Author        : tarlansoltanov
// Title         : Array Prototype Last
// ID            : 2619
// URL           : https://leetcode.com/problems/array-prototype-last/
// Difficulty    : Easy
// Language      : JavaScript


Array.prototype.last = function () {
  if (this.length === 0) return -1;
  return this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */