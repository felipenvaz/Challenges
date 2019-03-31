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
