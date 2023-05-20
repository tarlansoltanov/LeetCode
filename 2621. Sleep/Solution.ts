// Author        : tarlansoltanov
// Title         : Sleep
// ID            : 2621
// URL           : https://leetcode.com/problems/sleep/
// Difficulty    : Easy
// Language      : TypeScript


async function sleep(millis: number): Promise<void> {
  return new Promise((resolve: Function) => {
    setTimeout(() => resolve(), millis);
  });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
