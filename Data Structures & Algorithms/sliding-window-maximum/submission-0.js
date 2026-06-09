class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let left = 0
        const output = [];
        let right = k-1;
    while(right<nums.length){
        let window = nums.slice(left,right+1).sort((a,b)=>b-a);
        output.push(window[0]);
        left++;
        right++; 
    }
    return output;
    }
}
