class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
    const deque = []  // stores indices
    const output = []

    for(let right = 0; right < nums.length; right++) {
        // remove indices outside window
        while(deque.length && deque[0] < right - k + 1) {
            deque.shift()
        }

        // remove indices smaller than current
        while(deque.length && nums[deque[deque.length-1]] < nums[right]) {
            deque.pop()
        }

        deque.push(right)

        // window is full → record max
        if(right >= k-1) {
            output.push(nums[deque[0]])  // front = max!
        }
    }
    return output
}
}
