async function parallelAsyncOperations() {
  const [result1, result2, result3] = await Promise.all([
    asyncOperation(2),
    asyncOperation(4),
    asyncOperation(6)
  ]);

  console.log(result1, result2, result3);
}

parallelAsyncOperations();

// throtting

function throttleAsync(fn, delay) {
  let lastCall = 0;

  return async function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      return fn(...args);
    }
  };
}

const throttledAsyncFunction = throttleAsync(asyncOperation, 2000);
throttledAsyncFunction(3);
throttledAsyncFunction(7); // Will be ignored due to throttling
