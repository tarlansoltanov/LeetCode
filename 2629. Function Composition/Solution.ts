// Author        : tarlansoltanov
// Title         : Function Composition
// ID            : 2629
// URL           : https://leetcode.com/problems/function-composition/
// Difficulty    : Easy
// Language      : TypeScript


type F = (x: number) => number;

function compose(functions: F[]): F {
	return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */