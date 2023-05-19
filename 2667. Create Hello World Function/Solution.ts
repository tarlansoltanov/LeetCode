// Author        : tarlansoltanov
// Title         : Create Hello World Function
// ID            : 2667
// URL           : https://leetcode.com/problems/create-hello-world-function/
// Difficulty    : Easy
// Language      : TypeScript


function createHelloWorld() {
	return function(...args): string {
        return "Hello World";
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */