// Author        : tarlansoltanov
// Title         : Function Composition
// ID            : 2629
// URL           : https://leetcode.com/problems/function-composition/
// Difficulty    : Easy
// Language      : JavaScript


/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */