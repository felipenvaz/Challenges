/**
 *
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

*/

const { getPrimes } = require('../primes');

const start = new Date();
const primes = getPrimes(2000000);
console.log(primes.reduce((acc, v) => acc + v, 0));
console.log(`Seconds: ${((new Date()) - start) / 1000}`);
