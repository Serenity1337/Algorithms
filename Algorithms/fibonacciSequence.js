// const fibonacciSequence = (n) => {
//   let res = [0, 1]
//   for (let i = 2; i < n; i++) {
//     res.push(res[i - 2] + res[i - 1])
//   }
//   return res
// }

const fibonacciSequence = (n) => {
  // if (res.length === n) return res
  if (n < 2) {
    return n
  }

  return fibonacciSequence(n - 1) + fibonacciSequence(n - 2)
}

console.log(fibonacciSequence(5)) // [0,1,1,2,3,5]
console.log(fibonacciSequence(6)) // [0,1,1,2,3,5,8]
