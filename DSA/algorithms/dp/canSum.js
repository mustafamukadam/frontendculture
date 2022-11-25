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