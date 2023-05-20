// Author        : tarlansoltanov
// Title         : Sleep
// ID            : 2621
// URL           : https://leetcode.com/problems/sleep/
// Difficulty    : Easy
// Language      : JavaScript


/**
 * @param {number} millis
 */
async function sleep(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */