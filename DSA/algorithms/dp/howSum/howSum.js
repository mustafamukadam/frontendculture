// 25/11/2021  - used extra acc[] :(
function _howSum(target, acc = [], arr) {
    // base case that returns known answer
    if (target === 0) return acc
    if (target < 0) return null

    // Formula that returns answer for current call stack
    for (let num of arr) {
        let result = howSum(target - num, [...acc, num], arr)
        if (result !== null) { // isArray
            return result
        }
    }
    return null
}

// 25/11/2021 - fixed extra acc[]
function __howSum(target, arr) {
    // base case that returns known answer
    if (target === 0) return []
    if (target < 0) return null

    // Formula that returns answer for current call stack
    for (let num of arr) {
        let result = howSum(target - num, arr)
        if (Array.isArray(result)) { // isArray
            return [...result, num]
        }
    }
    return null
}
