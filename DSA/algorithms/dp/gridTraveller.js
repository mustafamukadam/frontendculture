// let memo = new Map()
function gridTraveler(m, n, memo = new Map()) {
    if (memo.has(m + ',' + n)) return memo.get(m + ',' + n) // #m

    if (m === 1 && n === 1) return 1
    if (m === 0 || n === 0) return 0

    else { // do we really need else?
        let answer = gridTraveler(m, n - 1, memo) + gridTraveler(m - 1, n, memo)
        memo.set(m + ',' + n, answer)
        return answer
    }
}

test('should canSum', () => {
    console.log(':: ',)
    expect(gridTraveler(3, 3)).toStrictEqual(6);
    expect(gridTraveler(2, 3)).toStrictEqual(3);
});

// 📌 More Solutions
//* gridTraveller()
function grid(m, n){
    // base case that returns answer
    if(m < 1 || n < 1) return 0
    if(m === 1 && n === 1) return 1

    // Formula applied on sub-problem calls 
    // that will give answer for current func call and return
    return grid(m-1, n) + grid(m, n-1)
}
/* 📌 TODO and Notes
gridTraveler(a, b) = gridTraveler(b, a)
Edge case - either dimension is Zero
Time complexity without memo = O(pow(2,n+m)) Look at video again to know why
https://youtu.be/oBt53YbR9Kk?t=3178
*/

/* 📌 Description and Links
how can sum or not..
*/