// Author        : tarlansoltanov
// Title         : Counter II
// ID            : 2665
// URL           : https://leetcode.com/problems/counter-ii/
// Difficulty    : Easy
// Language      : JavaScript


/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  const resetVal = init;

  return {
      increment: () => ++init,
      decrement: () => --init,
      reset: () => (init = resetVal),
  }
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/