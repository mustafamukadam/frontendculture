let memo = new Map()
function canSum(target, arr) {
    if (target === 0) return true
    if (target < 0) return false

    return arr.some(num => {
        if (memo.has(target - num)) return memo.get(target - num)
        // !else is not required
        else {
            let answer = canSum(target - num, arr)
            memo.set(target - num, answer)
            return answer
        }
    })
    // is some() equivalent to hasPathDFSR true/false code?
}

let b = [7, 14]
// analyze comlexity - Time: O(m*n) Space: O(m) - https://youtu.be/oBt53YbR9Kk?t=5314
console.log(canSum(300, b))