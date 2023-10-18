/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {    
    let dp = new Array(amount+1).fill(Infinity) // Infinity can be replaced with (amount+1)
    dp[0] = 0

    for(let a=1; a<=amount; a++){
        for(let coin of coins){
            dp[a] = Math.min(1 + dp[a - coin], dp[a])
        }
    }

    return dp[amount] !== Infinity ? dp[amount] : -1
};