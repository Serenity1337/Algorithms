// const factorial = (n) => {
//   let res = 1
//   if (n === 0 || n === 1) return res
//   for (let i = 1; i <= n; i++) {
//     res *= i
//   }
//   return res
// }

const factorial = (n) => {
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
  // n = 5, return 5 * factorial( 5 - 1 = 4)
  // n = 4, return 4 * factorial( 4 - 1 = 3)
  // n = 3, return 3 * factorial(3 - 1 = 2)
  // n = 2, return 2 * factorial(2 - 1 = 1)
  // n = 1, return 1 * factorial(1 - 1 = 0) which means it's n * 1 = 1 * 1 = 1
  // then we go up again, since we know n = 0 value since we hit the base case with 0.
  // n = 2, return 2 * 1 = 2,
  // n = 3, return 3 * 2 = 6,
  // n = 4, return 6 * 4 = 24,
  // n = 5, return 24 * 5 = 120
}

console.log(factorial(5))
