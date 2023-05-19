// Author        : tarlansoltanov
// Title         : Counter II
// ID            : 2665
// URL           : https://leetcode.com/problems/counter-ii/
// Difficulty    : Easy
// Language      : TypeScript


type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(val: number): ReturnObj {
    const resetValue = val;

    return {
        increment: () => ++val,
        decrement: () => --val,
        reset: () => (val = resetValue),
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */