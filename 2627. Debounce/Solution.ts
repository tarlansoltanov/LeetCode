// Author        : tarlansoltanov
// Title         : Debounce
// ID            : 2627
// URL           : https://leetcode.com/problems/debounce/
// Difficulty    : Medium
// Language      : TypeScript


type F = (...p: any[]) => any

function debounce(fn: F, t: number): F {
    let timer: ReturnType<typeof setTimeout> | null = null;
    return function(...args) {
        if(timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            fn(...args);
        }, t);
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */