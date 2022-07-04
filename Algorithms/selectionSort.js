const array = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7]
const selectionSort = (arr) => {
  const length = arr.length

  for (let i = 0; i < length; i++) {
    let min = i
    let temp = array[i]
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    array[i] = array[min]
    array[min] = temp
  }
}
