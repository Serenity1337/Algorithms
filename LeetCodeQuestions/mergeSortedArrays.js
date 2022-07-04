const mergeSortedArrays = (array1, array2) => {
  return [...array1, ...array2].sort((a, b) => a - b)
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]))
