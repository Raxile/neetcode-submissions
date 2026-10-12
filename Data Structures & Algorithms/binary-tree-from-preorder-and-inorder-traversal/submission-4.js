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
    const indexOf = new Map()
    inorder.forEach((v, i) => indexOf.set(v, i))

    this.pre = 0                      // reset here, every call!

    const build = (lo, hi) => {       // builds the tree for inorder[lo..hi]
        if (lo > hi) return null      // empty range

        const rootVal = preorder[this.pre]
        this.pre++                    // preorder pointer moves forward

        const root = new TreeNode(rootVal)
        const mid = indexOf.get(rootVal)

      root.left  = build(lo, mid - 1)
root.right = build(mid + 1, hi)

        return root
    }

    return build(0, inorder.length - 1)
}
}
