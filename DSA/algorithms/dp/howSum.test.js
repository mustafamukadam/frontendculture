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

    // memo this as well?
    return null
}

test('should howSum', () => {
    console.log('-->',howSum(19,[8,1]))
    // expect(howSum(19,[8,1])).toEqual([8,8,1,1,1])
    // expect(howSum(7,[5,3,4,7])).toEqual([5,1,1])
    // expect(howSum(7,[2,4])).toEqual(null)
});



//? ----------------------------- 💾 More Solutions  -------------------------------------------------------------------------

//?----------------------------- 🏋️‍♀️ Description and Links 🌎 -----------------------------------------------------------------
/*
how can sum or not..
*/

//TODO and Notes
/**
 * analyze comlexity - Time: O(m*n) Space: O(m) - https://youtu.be/oBt53YbR9Kk?t=5314
 */