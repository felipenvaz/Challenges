
const getPrimeFactors = (number) => {
  const numberSqrt = Math.sqrt(number);
  let remainder = number;
  const factors = {};
  for (let i = 2; i < numberSqrt; i++) {
    if (remainder % i === 0) {
      remainder /= i;
      factors[i] = i;
      i -= 1;
    }
  }

  if (remainder > 1) factors[remainder] = remainder;

  return Object.keys(factors).map(k => parseInt(k, 10));
};

const isPrime = (number) => {
  const numberSqrt = Math.sqrt(number);
  const remainder = number;
  for (let i = 2; i < numberSqrt; i++) {
    if (remainder % i === 0) {
      return false;
    }
  }

  return true;
};

const isPalindrome = (arg) => {
  if (!arg) return false;
  const str = arg.toString();
  if (str.length === 0) return false;
  const midPoint = str.length / 2;
  for (let i = 0; i < midPoint; i++) {
    const z = str.length - i - 1;
    if (str[i] !== str[z]) return false;
  }
  return true;
};

const getSequence = n => [...Array(n)].map((v, i) => i + 1);

module.exports = {
  getPrimeFactors,
  isPrime,
  isPalindrome,
  getSequence,
};
