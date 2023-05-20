// Author        : tarlansoltanov
// Title         : Throttle
// ID            : 2676
// URL           : https://leetcode.com/problems/throttle/
// Difficulty    : Medium
// Language      : TypeScript

type F = (...args: any[]) => void;

function throttle(fn: F, t: number): F {
  let timeout = null;
  let values = null;

  const runner = () => {
    if (values === null) {
      timeout = null;
    } else {
      fn(...values);
      values = null;
      timeout = setTimeout(runner, t);
    }
  };

  return function (...args) {
    if (timeout) {
      values = args;
    } else {
      fn(...args);
      timeout = setTimeout(runner, t);
    }
  };
}

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
