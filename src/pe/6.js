const { getSequence } = require('../shared');

const n = 100;
const sumOfSquares = getSequence(n).map(v => v ** 2).reduce((acc, v) => acc + v);
const squareOfSums = getSequence(n).reduce((acc, v) => acc + v) ** 2;

console.log(sumOfSquares);
console.log(squareOfSums);
console.log(Math.abs(sumOfSquares - squareOfSums));
