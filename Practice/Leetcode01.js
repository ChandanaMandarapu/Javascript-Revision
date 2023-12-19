let createCounter = function(count) {
    let n = count;

    return function() {
        const currentCounterValue = n;
        n += 1;
        return currentCounterValue;
    };
};

const counter = createCounter(10);

console.log(counter());
console.log(counter());
console.log(counter());
