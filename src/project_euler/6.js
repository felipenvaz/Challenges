/*
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/
const { getSequence } = require('../shared');

const n = 100;
const sumOfSquares = getSequence(n).map(v => v ** 2).reduce((acc, v) => acc + v);
const squareOfSums = getSequence(n).reduce((acc, v) => acc + v) ** 2;

console.log(sumOfSquares);
console.log(squareOfSums);
console.log(Math.abs(sumOfSquares - squareOfSums));
