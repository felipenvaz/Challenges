const primes = [2, 3];

const findPrimes = (startIdx, finish) => {
  let currentIdx = startIdx;

  const isPrime = (n) => {
    const limit = Math.sqrt(n);
    for (let i = 0; i < primes.length; i++) {
      const prime = primes[i];
      if (n % prime === 0) return false;
      if (prime > limit) break;
    }
    return true;
  };

  while (!finish(currentIdx)) {
    if (isPrime(currentIdx)) primes.push(currentIdx);
    currentIdx += 2;
  }
};

const getNthPrime = (n) => {
  const currentIdx = primes[primes.length - 1] + 2;
  const finish = () => primes.length >= n;
  findPrimes(currentIdx, finish);
  return primes[n - 1];
};

const getPrimes = (limit) => {
  const finish = currentIdx => currentIdx >= limit;
  findPrimes(primes[primes.length - 1] + 2, finish);
  return [...primes];
};

const getFactors = (n) => {
  const factors = {};
  const limit = Math.sqrt(n);
  for (let i = 1; i <= limit; i++) {
    if (n % i === 0) {
      factors[i] = i;
      factors[n / i] = n / i;
    }
  }

  return Object.values(factors);
};

module.exports = {
  getNthPrime,
  getPrimes,
  getFactors,
};
