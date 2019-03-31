/**

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/

/**

a = n^2 - m^2
b = 2nm
c = n^2 + m^2

*/

const sum = 1000;

// (n ** 2 - m ** 2) + (2 * n * m) + (n ** 2 + m ** 2) = sum
// n ** 2 + n * m = sum / 2

let m = 1;
let n = 1;
const finish = () => (m ** 2) + (m * n) === (sum / 2);
while (!finish()) {
  n = 1;
  m += 1;
  while (n < m && !finish()) {
    n += 1;
  }

  console.log(`m: ${m}; n: ${n}; sum: ${(n ** 2) + (n * m)}`);
}

const a = (m ** 2) - (n ** 2);
const b = 2 * m * n;
const c = (m ** 2) + (n ** 2);

console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`c: ${c}`);
console.log(`product: ${a * b * c}`);
