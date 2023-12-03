// Author        : tarlansoltanov
// Title         : Timeout Cancellation
// ID            : 2715
// URL           : https://leetcode.com/problems/timeout-cancellation/
// Difficulty    : Easy
// Language      : TypeScript


type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
	const timer = setTimeout(() => { fn(...args) }, t);
    
    return () => {
        clearTimeout(timer);
    };
};