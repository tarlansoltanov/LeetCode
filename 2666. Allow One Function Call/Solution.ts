// Author        : tarlansoltanov
// Title         : Allow One Function Call
// ID            : 2666
// URL           : https://leetcode.com/problems/allow-one-function-call/
// Difficulty    : Easy
// Language      : TypeScript


function once<T extends (...args: any[]) => any>(fn: T): 
 ((...args: Parameters<T>) => ReturnType<T> | undefined) {
  let time: boolean = true;
   return function (...args) {
    if(time){
      time = false;
      return fn(...args);
    }
  };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */