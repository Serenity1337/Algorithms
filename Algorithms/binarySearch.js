// const binarySearch = (arr, t) => {
//   let leftIndex = 0
//   let rightIndex = arr.length - 1

//   while (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//     if (arr[middleIndex] === t) {
//       return middleIndex
//     }
//     if (t > arr[middleIndex]) {
//       leftIndex = middleIndex + 1
//     }
//     if (t < arr[middleIndex]) {
//       rightIndex = middleIndex - 1
//     }
//   }
//   return -1
// }

const binarySearch = (arr, t, leftIndex = 0, rightIndex = arr.length - 1) => {
  // console.log(arr)

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  // console.log(middleIndex)
  // console.log(middleIndex)
  if (arr[middleIndex] === t) {
    return middleIndex
  }
  if (leftIndex > rightIndex) {
    return -1
  }
  if (t > arr[middleIndex]) {
    return binarySearch(arr, t, (leftIndex = middleIndex + 1), rightIndex, t)
  } else {
    return binarySearch(arr, t, leftIndex, (rightIndex = middleIndex - 1), t)
  }
}
console.log(binarySearch([-5, 2, 4, 6, 10], 10))
console.log(binarySearch([-5, 2, 4, 6, 10], 6))
console.log(binarySearch([-5, 2, 4, 6, 10], 20))
