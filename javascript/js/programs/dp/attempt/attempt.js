// howSum
// 1.
function howSum(target, arr, acc = []) {
    if (target === 0) return [true, acc]
    if (target < 0) return [false, acc]

    for (let num of arr) {
        let result = howSum(target - num, arr, [...acc, num])
        if (result && result[0])
            return result
    }
    return null
}

console.log(howSum(15, [9, 2], []))

// 2. Simply rely on acc and null
function howSum(target, arr, acc = []) {
    if (target === 0) return acc
    if (target < 0) return null

    for (let num of arr) {
        let result = howSum(target - num, arr, [...acc, num])
        if (result !== null)
            return result
    }
    return null
}

// 3. Get rid of acc
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

// 4. memo inside for loop
let memo = new Map()
function howSum(target, arr) {
    if (target === 0) return []
    if (target < 0) return null

    for (let num of arr) {
        if (memo.has(target - num)) return memo.get(target - num)
        let result = howSum(target - num, arr)
        memo.set(target - num, result)
        if (result !== null) return [num, ...result]
    }
    return null
}
