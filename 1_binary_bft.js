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
  queue.push(root) 
  while(queue.length) {
    // Dequeue: queue.shift()
    // dequeue the value from the queue and push it to the [] output: 
    let current = queue.shift();
    values.push(current.value)
  // Enqueue: queue.push(value)
  // enqueue the children of the value that is being dequed
    if (current.left){
      queue.push(current.left)
    }
    if (current.right){
      queue.push(current.right)
    }
  }
  return values  
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


//BFT = Level Order Traversal why? beacuse it is 1 level at a time.

//DFT = 

    // expected output: =>[1,2,3,4,5,6,7]
    //       1
    //     /   \
    //    2     3
    //  /  \   / \
    // 4    5 6   7
    //  1) dequeue the value from the queue and push it to the [] output: 
    //  2) enqueue the children of the value that is being dequed

    // queue: []
    // BFS output: [1,2,3,4,5,6,7]
    //
    // Bredth First Traversal = Level Order Traversal why? becuase it's 1 level at a time.
    // Queue: First In First Out "FIFO": 
    // stack: Last In First Out "LIFO":
    //
    //

    // Test Casees 2: 
    //   const head = new node()
    //   head.left = new node() 
    //   head.right = new node()
    // // Depth First Traversal  = 
    // console.log(traverse(head)) // []


   // 0 equals false
   // any other number will be true
  // if(1) {
  //   console.log('hey!');
  // }