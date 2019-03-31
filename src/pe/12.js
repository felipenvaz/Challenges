const { getTriagleNumber } = require('../shared');
const { getFactors } = require('../primes');

const factorsNumber = 500;
let triangleN = 1;
let factors = [];
for (let i = 1; factors.length <= factorsNumber; i++) {
  triangleN = getTriagleNumber(i);
  factors = getFactors(triangleN);
}

console.log(factors);
console.log(triangleN);
