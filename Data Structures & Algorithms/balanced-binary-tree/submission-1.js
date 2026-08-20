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
     * @return {boolean}
     */
    isBalanced(root) {

    function getHeight(node) {
    if(node === null) return 0  // base case

    const leftH = getHeight(node.left)
    if(leftH === -1) return -1  // propagate!

    const rightH = getHeight(node.right)
    if(rightH === -1) return -1  // propagate!

    if(Math.abs(leftH - rightH) > 1) return -1  // unbalanced!

    return 1 + Math.max(leftH, rightH)  // balanced! return height
}
    return getHeight(root) !== -1
    }
}
