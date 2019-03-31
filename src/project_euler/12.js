/**

The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28
36: [ 1, 2, 3, 4, 6, 9, 12, 18, 36 ]
45: [ 1, 3, 5, 9, 15, 45 ]
55: [ 1, 5, 11, 55 ]
66: [ 1, 2, 3, 6, 11, 22, 33, 66 ]
78: [ 1, 2, 3, 6, 13, 26, 39, 78 ]
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?

*/

const { getTriagleNumber } = require('../shared');
const { getFactors } = require('../primes');

const factorsNumber = 500;
let triangleN = 1;
let factors = [];
for (let i = 1; factors.length <= factorsNumber; i++) {
  triangleN = getTriagleNumber(i);
  factors = getFactors(triangleN);
}

console.log(factors);
console.log(triangleN);