/* Write a JavaScript program to find the smallest prime number strictly greater than a given number.  */

function isPrime(n) {
  if (n < 2) return false; // primes are >= 2

  // check divisibility only up to √n
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      // if divisible, not prime
      return false;
    }
  }
  return true; // no divisors found → prime
}

function smallestPrime(num) {
  let candidate = num + 1; // strictly greater, so start at num+1

  // keep looping until we find a prime
  while (true) {
    if (isPrime(candidate)) {
      return candidate; // found it, stop here
    }
    candidate++; // not prime → try the next number
  }
}

// Tests
console.log(smallestPrime(10)); // 11
console.log(smallestPrime(14)); // 17
console.log(smallestPrime(2)); // 3
