/* Write a JavaScript program to find all distinct prime factors of a given integer. */

function primeFactors(n) {
  const factors = new Set(); // Use a Set for distinct factors
  let num = n; // Work on a copy to avoid modifying original

  // Handle factor 2 separately (even prime)
  while (num % 2 === 0) {
    factors.add(2); // Add only once
    num /= 2;
  }

  // Check odd factors from 3 up to sqrt(num)
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    while (num % i === 0) {
      factors.add(i); // Add only once
      num /= i;
    }
  }

  // If remaining num > 1, it's a prime factor
  if (num > 1) {
    factors.add(num);
  }

  return Array.from(factors); // Return as array
}
