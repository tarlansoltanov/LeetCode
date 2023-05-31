// Author        : tarlansoltanov
// Title         : Nested Array Generator
// ID            : 2649
// URL           : https://leetcode.com/problems/nested-array-generator/
// Difficulty    : Medium
// Language      : JavaScript


/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
  for (const i of arr) {
    if (Array.isArray(i)) {
      yield* inorderTraversal(i);
    } else {
      yield i;
    }
  }

};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */