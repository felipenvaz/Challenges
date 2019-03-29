
const getPrimeFactors = (number) => {
  const numberSqrt = Math.sqrt(number);
  let remainder = number;
  const factors = [];
  for(let i = 2; i < numberSqrt; i++){
    if(remainder % i === 0){
      remainder /= i;
      factors.push(i);
    }
  }

  return factors;
}

const isPrime = (number) => {
  const numberSqrt = Math.sqrt(number);
  let remainder = number;
  for(let i = 2; i < numberSqrt; i++){
    if(remainder % i === 0){
      return true;
    }
  }

  return false;
}

module.exports = {
  getPrimeFactors,
  isPrime
}