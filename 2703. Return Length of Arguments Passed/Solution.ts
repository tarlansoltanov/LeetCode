// Author        : tarlansoltanov
// Title         : Return Length of Arguments Passed
// ID            : 2703
// URL           : https://leetcode.com/problems/return-length-of-arguments-passed/
// Difficulty    : Easy
// Language      : TypeScript


function argumentsLength(...args: any[]): number {
  return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */