async function* asyncGenerator() {
  yield await asyncOperation(1);
  yield await asyncOperation(2);
  yield await asyncOperation(3);
}

(async () => {
  for await (const result of asyncGenerator()) {
    console.log(result);
  }
})();

// timeout

function timeout(ms) {
  return new Promise((_, reject) => setTimeout(() => reject('Timeout Error'), ms));
}

async function asyncFunctionWithTimeout() {
  try {
    const result = await Promise.race([asyncOperation(4), timeout(1500)]);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

asyncFunctionWithTimeout();

// error handling

async function asyncOperationWithError() {
  throw new Error('Async Operation Failed');
}

async function handleAsyncError() {
  try {
    await asyncOperationWithError();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

handleAsyncError();
