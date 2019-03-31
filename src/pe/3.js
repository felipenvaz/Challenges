const shared = require('../shared');

const number = 600851475143;
const factors = shared.getPrimeFactors(number);

console.log(Math.max(...factors));
