// Author        : tarlansoltanov
// Title         : Group By
// ID            : 2631
// URL           : https://leetcode.com/problems/group-by/
// Difficulty    : Medium
// Language      : TypeScript


declare global {
  interface Array<T> {
      groupBy(fn: (item: T) => string): Record<string, T[]>
  }
}

Array.prototype.groupBy = function(fn) {
  return this.reduce((res, item) => {
    const key = fn(item);
    if(res[key] === undefined) res[key] = [item];
    else res[key].push(item);
    return res;
  }, {})
}

/**
* [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
*/