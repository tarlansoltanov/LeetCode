// Author        : tarlansoltanov
// Title         : Compact Object
// ID            : 2705
// URL           : https://leetcode.com/problems/compact-object/
// Difficulty    : Medium
// Language      : JavaScript


/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
  if(!Boolean(obj)) return false;
  if(typeof obj !== 'object') return obj;

  if(Array.isArray(obj)) {
    const res = [];

    for(let key = 0; key < obj.length; key++){
      const temp = compactObject(obj[key]);
      if(temp) res.push(temp);
    }

    return res;
  }
  
  const res = {};

  Object.keys(obj).forEach((key) => {
    const temp = compactObject(obj[key]);
    if(temp) res[key] = temp;
  })

  return res;
};