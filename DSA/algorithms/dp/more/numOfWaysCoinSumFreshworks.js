// my attempt ...
function numOfWays(total, nums, dp, count = 0){
    if(total === 0) {
    count++
    return true
    }
    if(dp.has(total)) return dp.get(total)
    if(total < 0 ) return false
    
    for(let num of nums){
         let result = numOfWays(total-num, nums)
       if(result) dp.set(total, count)
    }
    
    return count
  }