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
        this.maxDia = 0
        this.hight(root);
        return this.maxDia
    }

    hight(root){
    if(root===null) return 0;
    const leftHeight = this.hight(root.left)
    const rightHeight = this.hight(root.right)

    this.maxDia = Math.max(leftHeight+rightHeight,this.maxDia)
    return 1 + Math.max(leftHeight,rightHeight)
    }
}
