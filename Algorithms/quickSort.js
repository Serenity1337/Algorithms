const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr
  }
  let pivot = arr[arr.length - 1]
  let left = []
  let right = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[j])
    }
  }
  return [...quickSort(left), ...quickSort(right)]
}
