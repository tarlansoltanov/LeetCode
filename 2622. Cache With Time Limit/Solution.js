// Author        : tarlansoltanov
// Title         : Cache With Time Limit
// ID            : 2622
// URL           : https://leetcode.com/problems/cache-with-time-limit/
// Difficulty    : Medium
// Language      : JavaScript


var TimeLimitedCache = function () {
  this.arr = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const result = this.arr.has(key);
  this.arr.set(key, value);
  setTimeout(() => {
    if (this.arr.get(key) == value) {
      this.arr.delete(key);
    }
  }, duration);
  return result;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.arr.has(key)) {
    return this.arr.get(key);
  }
  return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.arr.size;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */