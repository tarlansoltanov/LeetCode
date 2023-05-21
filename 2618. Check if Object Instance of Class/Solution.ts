// Author        : tarlansoltanov
// Title         : Check if Object Instance of Class
// ID            : 2618
// URL           : https://leetcode.com/problems/check-if-object-instance-of-class/
// Difficulty    : Medium
// Language      : TypeScript


function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (obj === null || obj === undefined || typeof classFunction !== 'function') return false;

  return Object(obj) instanceof classFunction;
}

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
