function howSum(target, arr){
     // base case that returns known answer
     if(target === 0) return []
     if(target < 0) return null

     // Formula that returns answer for current call stack
     for(let num of arr){
        let result = howSum(target-num, arr)
        if(Array.isArray(result)){ // isArray
            return [...result, num]
        }
     }
     return null
}

test('howSum', () => {
    console.log("👉1", howSum(7, [3,2,4]))
    console.log("👉2", howSum(7, [3,3]))
    console.log("👉3", howSum(19, [8, 1]))
    console.log("👉4", howSum(7, [5,3,4,7]))
    // expect(howSum(19,[], [8,1])).toEqual([8,8,1,1,1])
    // expect(howSum(7,[],[5,3,4,7])).toEqual([3, 4])
    // expect(howSum(7,[],[2,4])).toEqual(null)
});