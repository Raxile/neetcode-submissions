class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }

        const m = nums1.length;
        const n = nums2.length;
        let left = 0;
        let right = m;

        while (left <= right) {
            const i = Math.floor((left + right) / 2); // partition nums1
            const j = Math.floor((m + n + 1) / 2) - i; // partition nums2

            const maxLeft1 = i === 0 ? -Infinity : nums1[i - 1];
            const minRight1 = i === m ? Infinity : nums1[i];
            const maxLeft2 = j === 0 ? -Infinity : nums2[j - 1];
            const minRight2 = j === n ? Infinity : nums2[j];

            if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
                // ✅ valid partition!
                if ((m + n) % 2 === 1) {
                    return Math.max(maxLeft1, maxLeft2); // odd total
                } else {
                    return (
                        Math.max(maxLeft1, maxLeft2) +
                        Math.min(minRight1, minRight2)
                    ) / 2; // even total
                }
            } else if (maxLeft1 > minRight2) {
                right = i - 1; // i too big → go left
            } else {
                left = i + 1; // i too small → go right
            }
        }
    }
}