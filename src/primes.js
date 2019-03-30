const primes = [2];

const getNthPrime = (n) => {
  let currentIdx = 3;
  const finish = () => primes.length === n;
  const some = p => currentIdx % p === 0;

  while (!finish()) {
    if (!primes.some(some)) primes.push(currentIdx);
    currentIdx += 1;
  }
  return primes[primes.length - 1];
};

module.exports = {
  getNthPrime,
};
