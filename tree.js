/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root === null) return 0;
    
    let totalSum = 0;
    const stack = [this.root];
    
    while (stack.length > 0) {
      // Pop the last node added to the stack
      const currentNode = stack.pop();
      // Add its value to the total sum
      totalSum += currentNode.val;
      // Push all of its children onto the stack
      for (let child of currentNode.children) {
        stack.push(child);
      }
    }
    
    return totalSum;
  }


  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let totalCount = 0
    const stack = [this.root]

    while (stack.length > 0) {
      // Pop the last node added to the stack
      const currentNode = stack.pop();
      if (currentNode.val % 2 === 0) {
      // Add 1 to the total sum
        totalCount ++ ;
      }
      // Push all of its children onto the stack
      for (let child of currentNode.children) {
        stack.push(child);
      }
    }
    return totalCount 
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    
      let totalCount = 0 
      const stack = [this.root]
  
      while (stack.length > 0) {
        // Pop the last node added to the stack
        const currentNode = stack.pop();
        
        if (currentNode.val > lowerBound) {
        // Add 1 to the total sum
          totalCount ++ ;
        }
        // Push all of its children onto the stack
        for (let child of currentNode.children) {
          stack.push(child);
        }
      }
      return totalCount 
  }
}
const root = new TreeNode(1, [
  new TreeNode(2, [
    new TreeNode(4),
    new TreeNode(5),
  ]),
  new TreeNode(3, [
    new TreeNode(6),
    new TreeNode(7),
  ]),
]);

const tree = new Tree(root);
console.log(tree.numGreater(3)); // Output: 28

module.exports = { Tree, TreeNode };
