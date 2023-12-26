async function delayedFunction(timeout) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Function resolved after ${timeout} ms`);
        }, timeout);
    });
}

async function executeAsyncFunction() {
    const result = await delayedFunction(2000);
    console.log(result);
}

executeAsyncFunction();

