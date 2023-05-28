// Author        : tarlansoltanov
// Title         : Group By
// ID            : 2631
// URL           : https://leetcode.com/problems/group-by/
// Difficulty    : Medium
// Language      : JavaScript


/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const res = {};

    for(const i of this){
      const key = fn(i);
      if(res[key] === undefined){
        res[key] = [];
      }
      res[key].push(i);
    }

    return res;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */