const n = 20;

const isEvenlyDivisible = (num) => {
  for (let i = n; i > 0; i--) {
    if (num % i !== 0) return false;
  }

  return true;
};

for (let i = n; i < Number.MAX_SAFE_INTEGER; i++) {
  if (isEvenlyDivisible(i)) {
    console.log(i);
    break;
  }
}
