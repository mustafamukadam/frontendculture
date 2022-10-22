// let memo = new Map()

function gridTraveler(m, n, memo = new Map()) {
    if (memo.has(m + ',' + n)) return memo.get(m + ',' + n) // #m

    if (m === 1 && n === 1) return 1
    if (m === 0 || n === 0) return 0

    else {
        let answer = gridTraveler(m, n - 1, memo) + gridTraveler(m - 1, n, memo)
        memo.set(m + ',' + n, answer)
        return answer
    }
}







console.log(gridTraveler(3, 3)) // 6
// console.log(gridTraveler(2, 3)) // 3
// console.log(gridTraveler(3, 2)) // 3
// console.log(gridTraveler(4, 3)) // ?
// console.log(gridTraveler(5, 5)) // ?
// console.log(gridTraveler(6, 6)) // ?
// console.log(gridTraveler(7, 7)) // ?
// console.log(gridTraveler(8, 8)) // ?
console.log(gridTraveler(18, 18)) // 2333606220
// console.log('--');
// Edge case - either dimension is Zero
// console.log(gridTraveler(0, 1)) // 0


// Note:
// Time complexity without memo = O(pow(2,n+m)) Look at video again to know why
// https://youtu.be/oBt53YbR9Kk?t=3178

// gridTraveler(a, b) = gridTraveler(b, a)

//keep memo condition on top #m