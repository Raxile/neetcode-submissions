class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const merged = [...nums1,...nums2].sort((a,b)=>a-b)
        let median = ""
        
        if (merged.length % 2 === 0) {
  // Even length
   median = (merged[merged.length / 2 - 1] + merged[merged.length / 2]) / 2;
} else {
  // Odd length
   median = merged[Math.floor(merged.length / 2)];
}
 return median



    }
}
