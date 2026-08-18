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
        let maxDiameter =0

        function height(node){
            if(!node) return 0;

                    const leftH  = height(node.left)
        const rightH = height(node.right)

        // update diameter at this node
        maxDiameter = Math.max(maxDiameter, leftH + rightH)

        // return height to parent
        return 1 + Math.max(leftH, rightH)

        }



height(root)
        return maxDiameter
    }
}
