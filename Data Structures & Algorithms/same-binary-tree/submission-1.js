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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
 isSubtree(root, subRoot) {
    if(root === null) return false     // not found!
    if(subRoot === null) return true  // empty = subtree!

    if(this.isSameTree(root, subRoot)) return true  // found!

    // not same → check left and right
    return this.isSubtree(root.left,subRoot) || this.isSubtree(root.right,subRoot)
}

isSameTree(p, q) {
    if(p===null && q===null) return true
    if(p?.val !== q?.val) return false
    return this.isSameTree(p.left,q.left) && 
           this.isSameTree(p.right,q.right)
}
}
