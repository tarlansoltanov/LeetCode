// Author        : tarlansoltanov
// Title         : Memoize
// ID            : 2623
// URL           : https://leetcode.com/problems/memoize/
// Difficulty    : Medium
// Language      : TypeScript


type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
  let cache: {} = {};
  return function(...args) {
    let key: string = args.join();
    if(cache[key] === undefined){
      cache[key] = fn(...args);
    }
    return cache[key];
  }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */