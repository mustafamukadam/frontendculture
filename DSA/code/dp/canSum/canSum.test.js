// ✅
function canSum(target, arr) {
    if (target === 0) return true
    if (target < 0) return false

    for(let num of arr){
        let result = canSum(target - num, arr)
        if(result) return result        
    }

    return false
}

// ✅
function canSumMemo(target, arr, memo = new Map()) {
    if (target === 0) return true
    if (target < 0) return false
    if(memo.has(target)) return memo.get(target)

    for(let num of arr){
        let remainder = target - num
        let result = canSum(remainder, arr, memo)
        memo.set(remainder, result)
        
        if(result) return result      
    }

    return false
}


test('canSum NO memo', () => {
    expect(canSum(7,[])).toEqual(false); //empty array
    expect(canSum(-7,[2,3])).toEqual(false); // negative
    expect(canSum(0, [1,2,0])).toEqual(true); // target zero

    expect(canSum(7, [2, 3])).toEqual(true);
    expect(canSum(7, [5, 3, 4, 7])).toEqual(true);
    expect(canSum(7, [2, 4])).toEqual(false);
    expect(canSum(8, [2, 3, 5])).toEqual(true);
    expect(canSum(7, [5, 3])).toEqual(false);

    expect(canSum(0, [1, 2, 3])).toEqual(true);
    expect(canSum(1, [2, 3, 4])).toEqual(false);
    expect(canSum(18, [3, 6, 9, 12])).toEqual(true);
    expect(canSum(23, [5, 7, 9, 11, 13])).toEqual(true);
    expect(canSum(17, [1, 3, 5, 7, 9])).toEqual(true);
    expect(canSum(50, [10, 20, 30, 40, 50])).toEqual(true);
    expect(canSum(100, [1, 2, 3, 5, 8, 13, 21, 34, 55, 89])).toEqual(true);
    expect(canSum(15, [1, 4, 9, 16])).toEqual(true);
    expect(canSum(33, [7, 11, 13, 17, 19, 23])).toEqual(true);
    expect(canSum(37, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29])).toEqual(true);
});

test('canSum memo', () => {
    expect(canSumMemo(301,[7,14])).toEqual(true);
});