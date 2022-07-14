const n = 3 // answer = 2
const n2 = 5

const climbStairs = (n) => {
  if (n < 3) return n

  const memo = new Array(n + 1).fill(0)

  const dp = (n, memo) => {
    if (n < 0) return 0
    if (n === 1) return 1
    if (n === 2) return 2

    if (!memo[n]) {
      memo[n] = dp(n - 1, memo) + dp(n - 2, memo)
    }
    return memo[n]
  }

  return dp(n, memo)
}

console.log(climbStairs(n))
