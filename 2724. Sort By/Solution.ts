// Author        : tarlansoltanov
// Title         : Sort By
// ID            : 2724
// URL           : https://leetcode.com/problems/sort-by/
// Difficulty    : Easy
// Language      : TypeScript


function sortBy(arr: any[], fn: Function): any[] {
  return arr.sort((a, b) => fn(a) - fn(b));
};