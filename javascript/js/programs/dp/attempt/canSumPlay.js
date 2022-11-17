// function canSum(target, sum = 0, arr) {
//     // base case
//     if (sum === target) return true
//     if (sum > target) return false

//     for (let num of arr) {
//         let result = canSum(target, sum + num, arr)
//         if (result) return true
//     }
//     return false
// }

// console.log(canSum(22, 0, [6, 4]))
