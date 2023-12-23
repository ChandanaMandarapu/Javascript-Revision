class Debouncer {
  constructor() {
    this.timerId = null;
  }

  debounce(fn, t, inputs) {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }

    this.timerId = setTimeout(() => {
      fn(...inputs);
      this.timerId = null;
    }, t);
  }
}

// Example 1
const debouncer1 = new Debouncer();
const log1 = (...inputs) => console.log([Date.now(), inputs]);
const dlog1 = debouncer1.debounce.bind(debouncer1, log1, 50);

setTimeout(() => dlog1(1), 50);
setTimeout(() => dlog1(2), 75); // Output: [125, [2]]

// Example 2
const debouncer2 = new Debouncer();
const log2 = (...inputs) => console.log([Date.now(), inputs]);
const dlog2 = debouncer2.debounce.bind(debouncer2, log2, 20);

setTimeout(() => dlog2(1), 50); // Output: [70, [1]]
setTimeout(() => dlog2(2), 100); // Output: [120, [2]]

// Example 3
const debouncer3 = new Debouncer();
const log3 = (...inputs) => console.log([Date.now(), inputs]);
const dlog3 = debouncer3.debounce.bind(debouncer3, log3, 150);

setTimeout(() => dlog3(1, 2), 50); // Output: [200, [1, 2]]
setTimeout(() => dlog3(3, 4), 300);
setTimeout(() => dlog3(5, 6), 300); // Output: [450, [5, 6]]
