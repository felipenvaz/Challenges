const { isPalindrome } = require('../shared');

const getMaxDigitFactors = (number, digits) => {
  const upperLimit = ((10 ** digits) - 1);
  const lowerLimit = 10 ** (digits - 1);

  let remainder = number;
  let factors = [];
  for (let i = upperLimit; i > lowerLimit; i--) {
    if (remainder % i === 0) {
      remainder /= i;
      factors.push(i);
    }
  }
  if (remainder > 1) factors = [];
  return factors;
};

const digits = 3;
const upperLimit = ((10 ** digits) - 1) ** 2;
let maxPalindrome = 0;

for (let i = upperLimit; i > 0; i--) {
  if (isPalindrome(i)) {
    const factors = getMaxDigitFactors(i, digits);
    if (factors.length === 2) {
      maxPalindrome = i;
      break;
    }
  }
}

console.log(maxPalindrome);
