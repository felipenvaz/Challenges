const limit = 4000000;

let sum = 0;
let previous = 1;
let current = 1;
while (current < limit) {
  if (current % 2 === 0) sum += current;
  const temp = current;
  current += previous;
  previous = temp;
}

console.log(sum);
