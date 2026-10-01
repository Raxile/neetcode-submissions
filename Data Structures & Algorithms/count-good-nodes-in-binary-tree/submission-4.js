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
    goodNodes(root) {
        this.goodNode = 0;
        this.traversal(root)
        return this.goodNode
    }

    traversal(root,parent){
        if(root===null) return null

        if(!parent||root.val>=parent) this.goodNode =this.goodNode+1;

        const parentVal = parent?Math.max(parent,root.val):root.val

        this.traversal(root.left,parentVal)
        this.traversal(root.right,parentVal)

    }
}
