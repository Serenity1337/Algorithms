const linearSearch = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i
    }
  }
  return -1
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10))
console.log(linearSearch([-5, 2, 10, 4, 6], 6))
console.log(linearSearch([-5, 2, 10, 4, 6], 20))
