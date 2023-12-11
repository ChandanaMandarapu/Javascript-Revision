const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num ** 2);
console.log('Squared Numbers:', squaredNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers);
