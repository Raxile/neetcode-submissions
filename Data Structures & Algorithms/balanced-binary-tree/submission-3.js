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
        this.balance = true;
        this.height(root)
        return this.balance
    }

    height(root){
      if(root===null) return 0
    
    const leftHeight = this.height(root.left)
    const rightHeight = this.height(root.right)

    this.balance = this.balance && Math.abs(leftHeight - rightHeight) <= 1


      return 1 + Math.max(leftHeight,rightHeight)
    }
}
