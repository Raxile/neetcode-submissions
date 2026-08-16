class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = 0
        let left=0
        let right=heights.length-1

        while(left<right){
            const b = right-left;
            const h = Math.min(heights[left],heights[right])
            area = Math.max(area,h*b)
            if(heights[left]>heights[right]) right--
            else left++
        }
        return area
    }
}
