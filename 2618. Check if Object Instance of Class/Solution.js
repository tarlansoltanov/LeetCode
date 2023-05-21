// Author        : tarlansoltanov
// Title         : Check if Object Instance of Class
// ID            : 2618
// URL           : https://leetcode.com/problems/check-if-object-instance-of-class/
// Difficulty    : Medium
// Language      : JavaScript


/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
  if(obj === null || obj === undefined || typeof classFunction !== 'function') return false;

  return (Object(obj) instanceof classFunction);
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */