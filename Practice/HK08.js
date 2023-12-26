class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Cannot divide by zero";
        }
    }
}

const myCalculator = new Calculator();
console.log(myCalculator.add(5, 3));
console.log(myCalculator.multiply(4, 7));

