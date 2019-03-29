/**
  The prime factors of 13195 are 5, 7, 13 and 29.

  What is the largest prime factor of the number 600851475143 ?
 */
const shared = require('../shared');

const number = 600851475143;
const factors = shared.getPrimeFactors(number)

console.log(Math.max(...factors));