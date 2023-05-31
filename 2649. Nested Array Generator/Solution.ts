// Author        : tarlansoltanov
// Title         : Nested Array Generator
// ID            : 2649
// URL           : https://leetcode.com/problems/nested-array-generator/
// Difficulty    : Medium
// Language      : TypeScript


type MultidimensionalArray = (MultidimensionalArray | number)[]

function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
  for(const item of arr){
    Array.isArray(item) ? yield *inorderTraversal(item) : yield item;
  }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */