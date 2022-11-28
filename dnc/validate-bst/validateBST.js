/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isValidBST = function(root, max=Infinity, min=-Infinity) {
  if(!root) { return true }
  if(!root.left && !root.right) { return true }

  if(root.left && root.left.val > root.val || root.left.val < min) {
    return false;
  }
  if(root.right && root.right.val < root.val || root.right.val > max) {
    return false;
  }

  let leftIsValid = isValidBST(root.left, root.val, min);
  let rightIsValid = isValidBST(root.right, max, root.val);

  return leftIsValid && rightIsValid;
};
