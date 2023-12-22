
class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    if (this.cache.has(key) && this.cache.get(key).expiration > Date.now()) {
      this.cache.set(key, { value, expiration: Date.now() + duration });
      return true;
    } else {
      this.cache.set(key, { value, expiration: Date.now() + duration });
      return false;
    }
  }

  get(key) {
    if (this.cache.has(key) && this.cache.get(key).expiration > Date.now()) {
      return this.cache.get(key).value;
    } else {
      return -1;
    }
  }

  count() {
    const currentTime = Date.now();
    let count = 0;
    for (const [key, data] of this.cache.entries()) {
      if (data.expiration > currentTime) {
        count++;
      }
    }
    return count;
  }
}

// Example 1
const cache1 = new TimeLimitedCache();
console.log(cache1.set(1, 42, 100)); // Output: false
console.log(cache1.get(1)); // Output: 42
console.log(cache1.count()); // Output: 1
console.log(cache1.get(1)); // Output: -1

// Example 2
const cache2 = new TimeLimitedCache();
console.log(cache2.set(1, 42, 50)); // Output: false
console.log(cache2.set(1, 50, 100)); // Output: true
console.log(cache2.get(1)); // Output: 50
console.log(cache2.get(1)); // Output: 50
console.log(cache2.get(1)); // Output: -1
console.log(cache2.count()); // Output: 0
