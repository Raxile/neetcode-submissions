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

levelOrder(root, level=0, result=[]) {
    if(root === null) return []

    result[level] = result[level] || []
    result[level].push(root.val)

    this.levelOrder(root.left, level+1, result)
    this.levelOrder(root.right, level+1, result)

    return result
}
}
