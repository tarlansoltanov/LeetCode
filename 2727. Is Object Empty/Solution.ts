// Author        : tarlansoltanov
// Title         : Is Object Empty
// ID            : 2727
// URL           : https://leetcode.com/problems/is-object-empty/
// Difficulty    : Easy
// Language      : TypeScript


function isEmpty(obj: Record<string, any> | any[]): boolean {
  return !Object.keys(obj).length;
}
