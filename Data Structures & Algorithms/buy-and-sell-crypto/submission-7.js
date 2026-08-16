class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left=0;
        let right=1;
        let maxProfit = 0

        while(right<prices.length){
            const profit = prices[right] - prices[left]
            if(profit<0){
                left++;
            }else
            right++;
            maxProfit = Math.max(maxProfit,profit)

        }
        return maxProfit;
    }
}
