//* canSum()
let memo = new Map()
function canSum(target, arr){
    // base condition
    if(target === 0) return true
    if(target < 0) return false

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
test.skip('canSum without memo', () => {
    // console.log("👉",canSum(7,[3,4]))
    expect(canSum(7,[5, 3])).toEqual(false);
    expect(canSum(7,[5,3,4,7])).toEqual(true);
    expect(canSum(8,[2,3,5])).toEqual(true);
});

test('canSum memo required', () => {
    // console.log("👉",canSum(7,[3,4]))
    expect(canSum(301,[7,14])).toEqual(true);
});


//* gridTraveller()
function grid(m, n){
    // base case that returns answer
    if(m < 1 || n < 1) return 0
    if(m === 1 && n === 1) return 1

    // Formula applied on sub-problem calls 
    // that will give answer for current func call and return
    return grid(m-1, n) + grid(m, n-1)
}

test('grid without memo', () => {
    console.log("👉",grid(2,2))
    // expect(grid()).toEqual();
});