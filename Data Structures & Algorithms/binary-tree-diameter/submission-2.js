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
     * @return {number}
     */
diameterOfBinaryTree(root) {
    this.maxDiameter = 0   // reset here, not just constructor!
    this.height(root)
    return this.maxDiameter
}

    height(node) {
    if(node === null) return 0   // ✅ height of nothing

    const leftHeight = this.height(node.left)
    const rightHeight = this.height(node.right)

    this.maxDiameter = Math.max(this.maxDiameter, leftHeight + rightHeight)

    return 1 + Math.max(leftHeight, rightHeight)   // ✅ use the names you declared!
}
}
