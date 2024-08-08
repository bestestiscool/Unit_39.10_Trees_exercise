/** BinaryTreeNode: node for a binary tree. */
class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  minDepth() {
    if (this.root === null) return 0;

    const queue = [{ node: this.root, depth: 1 }];

    while (queue.length > 0) {
      const { node, depth } = queue.shift();

      // Check if the current node is a leaf node
      if (node.left === null && node.right === null) {
        return depth;
      }

      // Add left and right children to the queue if they exist
      if (node.left !== null) {
        queue.push({ node: node.left, depth: depth + 1 });
      }
      if (node.right !== null) {
        queue.push({ node: node.right, depth: depth + 1 });
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  maxDepth() {
    if (this.root === null) return 0;

    const stack = [{ node: this.root, depth: 1 }];
    let maxDepth = 0;

    while (stack.length > 0) {
      const { node, depth } = stack.pop();
      maxDepth = Math.max(maxDepth, depth);

      if (node.left !== null) {
        stack.push({ node: node.left, depth: depth + 1 });
      }
      if (node.right !== null) {
        stack.push({ node: node.right, depth: depth + 1 });
      }
    }

    return maxDepth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  maxSum() {
    let maxSum = -Infinity;

    function dfs(node) {
      if (node === null) return 0;

      const leftMax = Math.max(0, dfs(node.left));
      const rightMax = Math.max(0, dfs(node.right));

      const currentSum = node.val + leftMax + rightMax;
      maxSum = Math.max(maxSum, currentSum);

      return node.val + Math.max(leftMax, rightMax);
    }

    dfs(this.root);
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  nextLarger(lowerBound) {
    if (this.root === null) return null;

    let result = null;
    const stack = [this.root];

    while (stack.length > 0) {
      const node = stack.pop();

      if (node.val > lowerBound && (result === null || node.val < result)) {
        result = node.val;
      }

      if (node.left !== null) {
        stack.push(node.left);
      }
      if (node.right !== null) {
        stack.push(node.right);
      }
    }

    return result;
  }


  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
