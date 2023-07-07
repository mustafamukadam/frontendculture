var coinChange = function (coins, amount) {

    function fewestCoins(coins, amount, memo) {
        if (amount === 0) return 0
        if (amount < 0) return -1

        if (memo.has(amount)) return memo.get(amount)

        let minCoins = Infinity
        for (let coin of coins) {
            let result = fewestCoins(coins, amount - coin, memo)
            if (result !== -1) {
                minCoins = Math.min(minCoins, 1 + result)
            }
            // mistake of setting memo here
        }

        // This space represents answer for current node.
        // All child nodes for current node has been explored
        // Think that for leaf node, all further node in loop has either returned 0 or -1
        memo.set(amount, minCoins)
        return minCoins === Infinity ? -1 : minCoins
    }

    return fewestCoins(coins, amount, new Map())
};

test('should coin change', () => {
    expect(coinChange([1, 2, 5], 11)).toEqual(3)
    expect(coinChange([1, 3, 4, 5], 7)).toEqual(2)
    expect(coinChange([1, 3, 4, 5], 8)).toEqual(2)
    expect(coinChange([1, 3, 4, 5], 16)).toEqual(4)
    // console.log('--->', coinChange([1,2,5], 11));
});