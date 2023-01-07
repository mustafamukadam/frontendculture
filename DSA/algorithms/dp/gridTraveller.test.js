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