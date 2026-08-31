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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
    // build map: value → index in inorder   (O(n) once)
    const inorderMap = new Map()
    inorder.forEach((val, idx) => inorderMap.set(val, idx))

    let preIdx = 0  // pointer into preorder, shared across all calls

    function build(left, right) {
        // left/right are boundaries in inorder array
        if (left > right) return null

        // next root is always preorder[preIdx]
        const rootVal = preorder[preIdx++]
        const node = new TreeNode(rootVal)

        // find root's position in inorder — O(1) with map
        const mid = inorderMap.get(rootVal)

        // everything left of mid  → left subtree
        // everything right of mid → right subtree
        node.left  = build(left, mid - 1)
        node.right = build(mid + 1, right)

        return node
    }

    return build(0, inorder.length - 1)
}
 
}
