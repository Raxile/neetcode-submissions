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
kthSmallest(root, k) {
    this.count = 0   // nodes visited
    this.result = 0  // answer

    this.inorder(root, k)
    return this.result
}

inorder(node, k) {
    if(node === null) return

    // go LEFT first
    this.inorder(node.left, k)

    // visit current node
    this.count++
    if(this.count === k) {
        this.result = node.val  // save answer!
        return
    }

    // go RIGHT
    this.inorder(node.right, k)
}
}
