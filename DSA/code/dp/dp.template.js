// 1. top-down approach template
function dp(state, memo) {
    // 1. Base Cases
    if (/*state <= some value*/) return /*some value*/

    // 2. Return memoized value if it exists
    if (memo.has(state)) return memo.get(state)

    // 3. Recurrence Relation
    // Calculate the result for the current state based on smaller subproblems
    const subproblemResult = /* Calculate the result using DP operations, e.g., minmax[ DP(op1(state)), DP(op2(state)) ] */

    // 4. Store result in memo for current state and return
    memo.set(state, subproblemResult)
    return subproblemResult
}


// 2. bottom-up approach (tabulation) template
function dpBottomUp(n) {
    // 1. Create an array to store results of subproblems
    const dpTable = new Array(n + 1);

    // 2. Base Case Initialization
    dpTable[0] = /* Initial value for base case 1 */;
    dpTable[1] = /* Initial value for base case 2 */;

    // 3. Build up the solution from the bottom
    for (let i = 2; i <= n; i++) {
        // 4. Calculate the result for the current state based on smaller subproblems
        dpTable[i] = /* Calculate the result using DP operations, e.g., minmax[ dpTable[op1(i)], dpTable[op2(i)] ] */;
    }

    // 5. Return the final result
    return dpTable[n];
}



//tip: initialize dp array with length and fill with some value
let dp = Array(nums.length).fill(0)

//tip: use this instead of creating whole array
let arr = [1, 1];
// then in for-loop-
arr.push(arr[i-1] + arr[i-2]);