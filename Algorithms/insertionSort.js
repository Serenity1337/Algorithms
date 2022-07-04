const insertSort = (arr) => {
  const length = arr.length

  for (let i = 0; i < length; i++) {
    let NTI = arr[i]
    let j = i + 1

    while (arr[j] < arr[j - 1]) {
      let temp = arr[j]
      arr[j] = arr[j - 1]
      arr[j - 1] = temp
      console.log(arr, i, j)
      j--
    }
  }
  return arr
}

console.log(insertSort([3, 0, 1, 8, 7, 2, 5, 4, 9, 6]))
