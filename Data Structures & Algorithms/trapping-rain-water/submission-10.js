class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
trap(height) {
    let left = 0
    let right = height.length - 1
    let maxLeft = height[0]                  // ✅
    let maxRight = height[height.length-1]   // ✅
    let output = 0

    while(left < right) {
        if(maxLeft <= maxRight) {
            left++
            maxLeft = Math.max(maxLeft, height[left])
            output += maxLeft - height[left]
        } else {
            right--
            maxRight = Math.max(maxRight, height[right])
            output += maxRight - height[right]
        }
    }
    return output
}
}
