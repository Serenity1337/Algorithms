//Naive solution
//Time Complexity: O(n^2)
// const FirstRecurringChar = (array) => {
//   //Loop throuh array outer array to increment index by 1 and inner array to decrement index by 1
//   for (let i = 1; i < array.length; i++) {
//     console.log(array[i])
//     for (let j = i - 1; j >= 0; j--) {
//       console.log(array[i], 'i', array[j], 'j')
//       if (array[i] === array[j]) return array[i]
//     }
//   }
//   return undefined
// }

// console.log(FirstRecurringChar([5, 3, 5, 2, 3, 5]), 'naswer')

const firstRecurringCharacter = (arr) => {
  const map = {}
  let answer
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      answer = arr[i]
      break
    } else {
      map[arr[i]] = true
    }
  }
  return answer
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(firstRecurringCharacter([2, 3, 4, 5]))
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]))
