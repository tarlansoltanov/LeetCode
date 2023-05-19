// Author        : tarlansoltanov
// Title         : Counter
// ID            : 2620
// URL           : https://leetcode.com/problems/counter/
// Difficulty    : Easy
// Language      : TypeScript


function createCounter(n: number): () => number {
    return () => n++;
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */