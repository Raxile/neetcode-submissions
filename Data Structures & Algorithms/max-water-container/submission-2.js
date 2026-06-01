class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = 0;
        let right = heights.length - 1
        let left=0;
while(left<right){
           const h = Math.min(heights[left],heights[right])
             area = Math.max(area,h*(right-left));
             if(heights[left]>heights[right]) right--;
             else left++;
}
 
       
        return area;
    }
}
