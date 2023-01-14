var coinChange = function(coins, amount) {

    function fewestCoins(coins, amount, count = 0){
        // when overflow beyond leaf node (amount <=0 )
        if(amount === 0) {
            return count
        }
        if(amount < 0) {
        return -1
    }
        let minCount = Infinity
        for(let coin of coins){
            let currentCount = fewestCoins(coins, amount - coin, count+1)
            if(currentCount >= 0 && currentCount < minCount){
                    minCount = currentCount
            }
        }

        return minCount === Infinity ? -1 : minCount
    }

    return fewestCoins(coins, amount, 0)
};

test('should coin change', () => {
    expect(coinChange([1,2,5], 11)).toEqual(3)
    expect(coinChange([1,3,4,5], 7)).toEqual(2)
    expect(coinChange([1,3,4,5], 8)).toEqual(2)
    expect(coinChange([1,3,4,5], 16)).toEqual(4)
    // console.log('--->', coinChange([1,2,5], 11));
});