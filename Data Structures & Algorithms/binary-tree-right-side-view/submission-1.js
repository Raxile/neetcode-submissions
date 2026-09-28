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
     * @return {number[]}
     */
    rightSideView(root) {
this.result=[]
this.traversal(root,0)
return this.result
        
    }
    traversal(root,level){
        if(root===null) return null
    this.result[level] = root.val
    this.traversal(root.left,level+1)
        this.traversal(root.right,level+1)

    }
}
