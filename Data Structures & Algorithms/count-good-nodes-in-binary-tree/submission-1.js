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
    goodNodes(root,maxSoFar=-Infinity) {
        if(root===null) return 0

        let isGood = root.val >= maxSoFar ? 1 : 0
        let newMax = Math.max(maxSoFar, root.val)

        return isGood+this.goodNodes(root.left,newMax)+this.goodNodes(root.right,newMax)


    }
}
