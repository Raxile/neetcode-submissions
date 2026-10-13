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
    maxPathSum(root) {
this.maxPath = -Infinity
     this.gain(root)
     return this.maxPath
    }
     gain(node) {
        if (node === null) return 0

        const leftGain  = Math.max(0, this.gain(node.left))    // ignore negative branches
        const rightGain = Math.max(0, this.gain(node.right))

        // path that TURNS at this node (uses both sides)
        this.maxPath = Math.max(this.maxPath, node.val + leftGain + rightGain)

        // what the parent can use (only ONE side can continue upward)
        return node.val + Math.max(leftGain, rightGain)
    }
}
