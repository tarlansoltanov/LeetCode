// Author        : tarlansoltanov
// Title         : Allow One Function Call
// ID            : 2666
// URL           : https://leetcode.com/problems/allow-one-function-call/
// Difficulty    : Easy
// Language      : JavaScript


/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
  let time = 0;
  return function(...args){
      if(time === 0){
          time++;
          return fn(...args);
      }
  }
};

/**
* let fn = (a,b,c) => (a + b + c)
* let onceFn = once(fn)
*
* onceFn(1,2,3); // 6
* onceFn(2,3,6); // returns undefined without calling fn
*/