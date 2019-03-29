/**
  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*
*/

// const { } = require('../shared');

const n = 20;

const isEvenlyDivisible = (num) => {
  for (let i = n; i > 0; i--) {
    if (num % i !== 0) return false;
  }

  return true;
};

for (let i = n; i < Number.MAX_SAFE_INTEGER; i++) {
  if (isEvenlyDivisible(i)) {
    console.log(i);
    break;
  }
}
