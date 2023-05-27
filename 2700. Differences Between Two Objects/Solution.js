// Author        : tarlansoltanov
// Title         : Differences Between Two Objects
// ID            : 2700
// URL           : https://leetcode.com/problems/differences-between-two-objects/
// Difficulty    : Medium
// Language      : JavaScript


/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
  const notExist = (val) => { return val === undefined };

  const getDiff = (val1, val2) => {
    if (notExist(val1) || notExist(val2)) return '';
    if (typeof val1 !== typeof val2) return [val1, val2];
    if (Array.isArray(val1) !== Array.isArray(val2)) return [val1, val2];
    if (typeof val1 === 'object') {
      const diff = objDiff(val1, val2);
      return Object.keys(diff).length !== 0 ? diff : '';
    }
    if (val1 === val2) return '';
    return [val1, val2];
  };

  const res = {};

  for (const key of Object.keys(obj1)) {
    const diff = getDiff(obj1[key], obj2[key]);
    if (diff !== '') res[key] = diff;
  }

  return res;
};