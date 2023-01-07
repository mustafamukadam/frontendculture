let memo = new Map()
function canSum(target, arr) {
    if (target === 0) return true
    if (target < 0) return false

    return arr.some(num => {
        if (memo.has(target - num)) return memo.get(target - num)
        // else is not required
        else {
            //recurrence relation
            let answer = canSum(target - num, arr)
            memo.set(target - num, answer)
            return answer
        }
    })
    // is some() equivalent to hasPathDFSR true/false code?
}

test.skip('canSum without memo', () => {
    // console.log("👉",canSum(7,[3,4]))
    //memo=new Map()
    expect(canSum(7,[5, 3])).toEqual(false);
    expect(canSum(7,[5,3,4,7])).toEqual(true);
    expect(canSum(8,[2,3,5])).toEqual(true);
});

test('canSum memo required', () => {
    // console.log("👉",canSum(7,[3,4]))
    expect(canSum(301,[7,14])).toEqual(true);
});






/* 📌 More Solutions
* *
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
* *
*/


/* 📌 TODO and Notes
analyze comlexity - Time: O(m*n) Space: O(m) - https://youtu.be/oBt53YbR9Kk?t=5314
*/


/* 📌 Description and Links
how can sum or not..
*/