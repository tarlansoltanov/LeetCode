// Author        : tarlansoltanov
// Title         : Array of Objects to Matrix
// ID            : 2675
// URL           : https://leetcode.com/problems/array-of-objects-to-matrix/
// Difficulty    : Medium
// Language      : JavaScript


/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function (arr) {
  const getKeys = (arr) => {
    if (typeof arr !== 'object' || arr === null) return [''];
    const res = [];
    for (const key of Object.keys(arr)) {
      const childKeys = getKeys(arr[key]);
      for (const cKey of childKeys) {
        res.push(cKey ? `${key}.${cKey}` : key);
      }
    }
    return Array.from(res).sort();
  }

  const keySet = new Set();
  for (const item of arr) {
    getKeys(item).forEach((k) => keySet.add(k));
  }
  const keys = Array.from(keySet).sort();

  const getValue = (arr, key) => {
    const path = key.split('.');
    let i = 0, value = arr;
    while (i < path.length) {
      if (typeof value !== 'object' || value === null) return "";
      value = value[path[i]];
      i++;
    }
    if (typeof value === 'object' && value !== null || value === undefined) return "";
    return value;
  }

  const res = [keys];
  arr.forEach((k) => res.push(keys.map((i) => getValue(k, i))));

  return res;
};