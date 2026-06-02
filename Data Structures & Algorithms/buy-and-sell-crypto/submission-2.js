class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
     maxProfit(prices) {
        let profit=0;
        let left = prices[0];
        for(let right=1;right<prices.length;right++){
          profit = Math.max(prices[right] - left,profit);
          left = Math.min(left,prices[right]);
        }
        return profit;
    }
}
