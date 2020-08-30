// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,5,4], 9) --> [1,2]

// loop through arr
// loop through again
// if i + j = target 
// return [i,j] 

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length + 1; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j]
      }
    }
  }
}


module.exports = twoSum;
