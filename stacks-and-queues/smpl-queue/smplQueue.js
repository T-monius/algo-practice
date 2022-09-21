import { ListNode } from './ListNode.js'

class Queue {
  constructor() {
    const dummy = new ListNode();

    this.size = 0;
    this.head = dummy;
    this.tail = this.head;
  }

  enqueue(val) {
    const newNode = new ListNode(val);
    if (this.size === 0) { this.head = newNode };

    this.tail.addNext(newNode);
    this.tail = newNode;
    this.size = this.size + 1;
  }

  dequeue() {
    if(this.size === 0) { return }
    const val = this.head.val;
    const nextNode = this.head.next;

    this.head = nextNode;
    this.size = this.size - 1;

    return val;
  }
};

export { Queue };
