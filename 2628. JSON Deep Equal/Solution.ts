// Author        : tarlansoltanov
// Title         : JSON Deep Equal
// ID            : 2628
// URL           : https://leetcode.com/problems/json-deep-equal/
// Difficulty    : Medium
// Language      : TypeScript


function areDeeplyEqual(o1: any, o2: any): boolean {
  if (o1 === o2) return true;
  if (String(o1) !== String(o2)) return false;

  if (typeof o1 !== 'object') return o1 === o2;

  if (Array.isArray(o1) !== Array.isArray(o2)) return false;
  if (Object.keys(o1).length !== Object.keys(o2).length) return false;
  for (const key in o1) {
    if (!areDeeplyEqual(o1[key], o2[key])) return false;
  }
  return true;
}
