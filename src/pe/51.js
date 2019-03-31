const { getCombinations } = require('../arrangements');
const { isPrime } = require('../shared');

const familySize = 8;
const searched = {};

const getNewNumber = (digits, replacePositions, digit) => {
  const newDigits = digits.map((d, idx) => (replacePositions.includes(idx) ? digit : d));

  return newDigits.reduce((acc, d, idx) => acc + (d * (10 ** (newDigits.length - 1 - idx))), 0);
};

let currentNumber = 11;
let chosenFamily = false;
while (!chosenFamily) {
  if (isPrime(currentNumber)) {
    searched[currentNumber] = 1;
    const digits = [...currentNumber.toString()].map(n => parseInt(n, 10));
    const replacePositions = [];
    digits.forEach((d, idx) => {
      // (10 - familySize), because if not, an 'familySize' member family is not possible
      if (d <= (10 - familySize)) replacePositions.push(idx);
    });

    if (replacePositions.length) {
      const combinations = getCombinations(replacePositions);

      const primeFamilies = combinations.map((combination) => {
        const primeFamily = [];
        const start = Math.max(...(digits.filter((d, idx) => combination.includes(idx))));
        for (let i = start; i <= 9; i++) {
          const testNumber = getNewNumber(digits, combination, i);
          searched[testNumber] = 1;
          if (isPrime(testNumber)) primeFamily.push(testNumber);
        }

        return { primeFamily, combination };
      });


      for (let i = 0; i < primeFamilies.length; i++) {
        if (primeFamilies[i].primeFamily.length >= familySize) {
          chosenFamily = primeFamilies[i];
          break;
        }
      }
    }
  }

  currentNumber += 2;
}

console.log(chosenFamily);
