const { getPrimes } = require('../primes');
const { isPrime } = require('../shared');

const groupSize = 5;

const primes = getPrimes(1000000);
const concatenateNumbers = (n1, n2) => parseInt(n1.toString() + n2.toString(), 10);
const areSpecial = (n1, n2) => isPrime(concatenateNumbers(n1, n2)) && isPrime(concatenateNumbers(n2, n1));

const groups = [];
for (let i = 1; i < primes.length; i++) {
  if (groups.some(g => g.length === groupSize)) break;
  const prime = primes[i];

  groups.forEach((group) => {
    if (!group.some(p => !areSpecial(p, prime))) {
      groups.push([...group, prime]);
    }
  });

  groups.push([prime]);
}

const filtered = groups.filter(g => g.length === groupSize);
console.log(filtered);
console.log(filtered.map(g => g.reduce((acc, n) => acc + n, 0)));
