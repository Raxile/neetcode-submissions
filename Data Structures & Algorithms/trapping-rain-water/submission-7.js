class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
    const maxLeft =[]
    maxLeft[0] = height[0]
    for(let i = 1; i < height.length; i++) {
    maxLeft[i] = Math.max(maxLeft[i-1], height[i])
    }
    const maxRight = []
    maxRight[height.length-1] = height[height.length-1]
    for(let i = height.length-2; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i+1], height[i])
    }
    let output = 0
    // Step 3: calculate water
    for(let i = 0; i < height.length; i++) {
    output += Math.min(maxLeft[i], maxRight[i]) - height[i]
    }
    return output

    
    }
}
