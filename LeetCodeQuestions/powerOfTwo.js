const powerOfTwo = (n) => {
  if (n <= 2 && n > 0) return true
  for (let i = 1; i <= n; i++) {
    if (Math.pow(2, i) === n) {
      return true
    }
  }
  return false
}

console.log(powerOfTwo(1))
console.log(powerOfTwo(2))
console.log(powerOfTwo(4))
console.log(powerOfTwo(8))
console.log(powerOfTwo(16))
console.log(powerOfTwo(32))
console.log(powerOfTwo(33))
