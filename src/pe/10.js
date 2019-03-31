const { getPrimes } = require('../primes');

const start = new Date();
const primes = getPrimes(2000000);
console.log(primes.reduce((acc, v) => acc + v, 0));
console.log(`Seconds: ${((new Date()) - start) / 1000}`);
