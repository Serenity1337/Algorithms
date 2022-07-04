const bubbleSort = (arr) => {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
}
console.log(bubbleSort([-6, -2, 4, 8, 20, -8]))
