class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor(front = null) {
    this.front = front;
    this.rear = front;
  }

  // ADD NODE TO BACK OF QUEUE
  // USE DATA TO CREATE A NEW NODE AND ADD IT TO THE QUEUE
  enqueue(data) {
    const node = new Node(data);

    // if queue is empty
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
      return;
    }
    
    // add new node to the rear and update it.
    this.rear.next = node;
    this.rear = node;
  }

  // REMOVE NODE FROM FRONT OF QUEUE AND RETURN IT
  dequeue() {
    // if queue is empty, return null
    if (this.isEmpty())
      return null;

    // dequeue it and update the front
    const node = this.front;
    this.front = node.next;
    node.next = null;

    // if front is null, update the rear to null.
    if (this.front === null)
      this.rear = null;

    return node;
  }

  // RETURN NODE AT FRONT WITHOUT REMOVING IT
  peek() {
    return this.front;
  }

  // RETURN TRUE IF QUEUE IS EMPTY, OTHERWISE FALSE
  isEmpty() {
    // check if front is null
    return this.front === null;
  }

  // RETURN NUMBER OF NODES IN QUEUE, E.G. 10
  size() {
    // Check through each node in the queue from the front to the end.
    let count = 0;
    let curNode = this.front;
    while (curNode !== null) {
      curNode = curNode.next;
      count++;
    }
    return count;
  }

  // RETURN INTEGER REPRESENTING HOW FAR TARGET IS FROM FRONT OF QUEUE
  // IF TARGET ISN'T IN QUEUE, RETURN -1
  search(target) {
    let idx = 0;
    let curNode = this.front;
    while (curNode !== null) {
      if (curNode.data === target)
        return idx;

      curNode = curNode.next;
      idx++;
    }

    return -1;
  }
}

if (require.main === module) {
  // add your own tests in here

  const queue = new Queue(null);

  console.log("");
  console.log("Expecting null");
  console.log("=>", queue.peek());

  console.log("");
  console.log("Expecting null from dequeue");
  console.log("=>", queue.dequeue());

  console.log("");
  console.log("Expecting true from isEmpty");
  console.log("=>", queue.isEmpty());

  queue.enqueue(1);
  console.log("");
  console.log("Expecting a queue with one node");
  console.log("=>", queue);

  console.log("");
  console.log("Expecting a node with 1 from peek");
  console.log("=>", queue.peek());

  console.log("");
  console.log("Expecting false from isEmpty");
  console.log("=>", queue.isEmpty());

  console.log("");
  console.log("Expecting 1 from size");
  console.log("=>", queue.size());

  queue.enqueue(2);
  console.log("");
  console.log("Expecting 2 from size");
  console.log("=>", queue.size());

  queue.enqueue(3);
  console.log("");
  console.log("Expecting 0 from search");
  console.log("=>", queue.search(1));

  console.log("");
  console.log("Expecting 2 from search");
  console.log("=>", queue.search(3));

  console.log("");
  console.log("Expecting -1 from search");
  console.log("=>", queue.search(10));
}

module.exports = {
  Node,
  Queue
};

// Write your Big O findings here

// Optional: Please add your pseudocode to this file
// Optional: And a written explanation of your solution
