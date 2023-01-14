// 1. some comment about solution
function canSum(target, arr){
    // base condition
    if(target === 0) return true
    if(target < 0) return false

    // return arr.some(num=>canSum(target-num, arr)) // but then how memo?
    for(let num of arr){
        let result = canSum(target-num, arr)
        if(result) return true
    }
    return false
}

// 2. some comment about solution
function canSum(target, arr){
    // base condition
    if(target === 0) return true
    if(target < 0) return false

    // return arr.some(num=>canSum(target-num, arr))
    for(let num of arr){
        let result = canSum(target-num, arr)
        if(result) return true
    }
    return false
}


/* 📝 Notes and ToDos
analyze comlexity - Time: O(m*n) Space: O(m) - https://youtu.be/oBt53YbR9Kk?t=5314
*/
