/* 📝 Notes and ToDos
analyze comlexity - Time: O(m*n) Space: O(m) - https://youtu.be/oBt53YbR9Kk?t=5314
❗️ Not working for negative array values like expect(canSum(5,[-2,3])).toEqual(true);

📝 Even with memo, target = 3000 is fine, getting RangeError: Maximum call stack size exceeded for 30000,
looks like nothing wrong with logic but function is recursively called too many times,
which exceeds the maximum call stack size limit set by your JavaScript engine (gpt :D)
*/


// 🔗 ✅
//explain below method canSum
function canSum(target, arr) {
    if (target === 0) return true
    if (target < 0) return false

    for(let num of arr){
        let result = canSum(target - num, arr)
        if(result) return result        
    }

    return false
    // Or simply - 
    // return arr.some(num => canSum(target - num, arr))
}


// 🔗 1. some comment about solution
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


