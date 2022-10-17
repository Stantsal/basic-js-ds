const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue( value ) {
    const node = new ListNode(value);
    let current = this.head;

    if(!this.head) {
      this.head = node;
      return node;
    }

      while(current.next) {
        current = current.next;
      }

      current.next = node;
      return node;
  }

  dequeue() {
    let current = this.head;
    this.head = this.head.next;
    return current.value;
  }
}

module.exports = {
  Queue
};
