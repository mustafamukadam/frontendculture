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
