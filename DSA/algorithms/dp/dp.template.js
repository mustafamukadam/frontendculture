function canSum(target, arr){
    //* base condition
    if(/** target some value*/1) return /!** ANSWER*/;

    // if(memo.has(target)) return memo.get(target) // better to have in loop itself below I think
    // return arr.some(num=>canSum(target-num, arr))
    for(let num of arr){
        if(memo.has(target)) return memo.get(target)
        let result = canSum(target-num, arr)
        memo.set(target-num, result)
        if(result) return true
    }
    return false
}

