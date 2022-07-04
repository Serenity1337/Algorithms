const reverseString = (str) => {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'wrong input'
  }
  const answer = []
  for (let index = str.length - 1; index >= 0; index--) {
    answer.push(str[index])
  }

  return answer.join('')
}
console.log(reverseString('Hi My name is Andrei'))
