const strs = ['flower', 'flow', 'flight']

const longestCommonPrefix = (strs) => {
  let answer = ''

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return answer
    }
    answer = answer + strs[0][i]
  }
  return answer
}

console.log(longestCommonPrefix(strs))
