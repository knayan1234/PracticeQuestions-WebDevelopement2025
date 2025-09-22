/* Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.*/

function sortPrimeNos(num) {
  let primeNos = [];

  for (let i = 2; i < num; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNos.push(i);
    }
  }
  return primeNos;
}

console.log(sortPrimeNos(25));
