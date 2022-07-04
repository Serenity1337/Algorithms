const isPrime = (n) => {
  for (let index = 2; index < n; index++) {
    if (n % index === 0) {
      return false
    }
  }
  return true
}

const isPrimeAnotherVersion = (n) => {}
console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(121))
console.log(isPrime(195))
