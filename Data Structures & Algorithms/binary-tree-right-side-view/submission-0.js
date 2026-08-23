/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root, level=0, result=[]) {
    if(root === null) return result

    result[level] = root.val  // overwrite → right wins!

    this.rightSideView(root.left, level+1, result)   // ✅
    this.rightSideView(root.right, level+1, result)  // ✅

    return result
}
}
