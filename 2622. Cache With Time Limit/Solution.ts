// Author        : tarlansoltanov
// Title         : Cache With Time Limit
// ID            : 2622
// URL           : https://leetcode.com/problems/cache-with-time-limit/
// Difficulty    : Medium
// Language      : TypeScript


class TimeLimitedCache {
  cache: Map<number, number>;
  constructor() {
    this.cache = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    const result: boolean = this.cache.has(key);
    this.cache.set(key, value);
    setTimeout(() => {
      if (this.cache.get(key) == value) this.cache.delete(key);
    }, duration);
    return result;
  }

  get(key: number): number {
    return this.cache.has(key) ? this.cache.get(key) : -1;
  }

  count(): number {
    return this.cache.size;
  }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
