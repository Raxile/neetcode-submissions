class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
    const stack = []  // stores indices
    let maxArea = 0

    for(let i = 0; i <= heights.length; i++) {
        const currH = i === heights.length ? 0 : heights[i]

        while(stack.length && heights[stack[stack.length-1]] >= currH) {
            const idx = stack.pop()
            const height = heights[idx]
            const width = stack.length === 0 ? i : i - stack[stack.length-1] - 1
            maxArea = Math.max(maxArea, height * width)
        }
        stack.push(i)
    }
    return maxArea
}
}
