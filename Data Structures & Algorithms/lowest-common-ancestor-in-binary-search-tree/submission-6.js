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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if(root === null) return null
        const left = p.val<q.val? p :q
        const right = p.val>q.val? p :q

        if (left.val<=root.val&&right.val>=root.val) return root
        if(left.val<root.val) return this.lowestCommonAncestor(root.left,left,right)
        if(right.val>root.val) return this.lowestCommonAncestor(root.right,left,right)


    }
}
