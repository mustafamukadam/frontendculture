let memo = new Map()
function howSum(target, arr) {
    if (memo.has(target)) return memo.get(target)
    if (target === 0) return []
    if (target < 0) return null

    for (let num of arr) {
        let result = howSum(target - num, arr)
        // ! memo.set(target - num, result)
        if (result !== null) {
            memo.set(target - num, result)
            return [num, ...result]
        }
    }

    // ? memo this as well?
    return null
}

// let answer = howSum(19, [8, 1]) // 88111
// let answer = howSum(7, [5, 3, 4, 7]) // 34
// let answer = howSum(7, [2, 4]) // null
// let answer = howSum(8, [2, 3, 5]) // 2222
// let answer = howSum(287, [7, 14]) // 7777....
console.log(answer ? answer.join() : answer)
// console.log(answer)

/*
Without Memo
function howSum(target, arr) {
    if (target === 0) return []
    if (target < 0) return null

    for (let num of arr) {
        let result = howSum(target - num, arr)
        if (result !== null)
            return [num, ...result]
    }
    return null
}
*/


/**
 * Note:
 * * What if elements or array can't be reused?
 */

// TODO: Complexity