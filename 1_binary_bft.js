class node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function traverse(root) {
  const values = []
  const queue = []

  // your BFT code here

  // Enqueue: queue.push(value)

  // Dequeue: queue.shift()
}

// Implement a breadth-first traversal (BFT) for a binary tree.

// Inputs:

//   root: node (root of the binary tree)

// Output: list of values in the order of a breadth-first traversal

// Test cases:
const head = new node(6)
head.left = new node(3)
head.right = new node(9)
/*
expected output => [6,3,9,2,4,10]
    6
   / \
  3   9
 / \   \
2   4   10
queue: []        
BFS output: [6, 3, 9,2,4,10]
*/
console.log(traverse(head)) // [6, 3, 9]


//BFT = Level Order Traversal why? beacuse its 1 level at a time

//DFT = 