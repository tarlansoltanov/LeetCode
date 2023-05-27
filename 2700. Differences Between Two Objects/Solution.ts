// Author        : tarlansoltanov
// Title         : Differences Between Two Objects
// ID            : 2700
// URL           : https://leetcode.com/problems/differences-between-two-objects/
// Difficulty    : Medium
// Language      : TypeScript


function objDiff(obj1: any, obj2: any): any {
  const convertEmpty = (val: any): any => {
    if (Object.keys(val).length === 0) return '';
    return val;
  };
  const getDiff = (val1: any, val2: any): any => {
    if (val1 === undefined || val2 === undefined) return '';
    if (typeof val1 !== typeof val2) return [val1, val2];
    if (Array.isArray(val1) !== Array.isArray(val2)) return [val1, val2];
    if (typeof val1 === 'object') return convertEmpty(objDiff(val1, val2));
    if (val1 === val2) return '';
    return [val1, val2];
  };

  const res = {};

  for (const key of Object.keys(obj1)) {
    const diff = getDiff(obj1[key], obj2[key]);
    if (diff) res[key] = diff;
  }

  return res;
}
