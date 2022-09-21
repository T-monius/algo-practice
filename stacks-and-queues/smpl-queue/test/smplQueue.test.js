import assert from 'assert';
import { ListNode } from '../ListNode.js'
import { Queue } from '../smplQueue.js';

describe('The ListNode class', () => {
  const dummy = new ListNode();

  it('Instantiates a new node', () => {
    assert.equal(dummy instanceof ListNode, true);
  });

  it('Instantiates an empty list with a null value', () => {
    assert.equal(dummy.val, null);
  });

  it('Instantiates an empty node with no next node', () => {
    assert.equal(dummy.next, null);
  });

  it('Stores an optional initial value.', () => {
    const val = 0
    const aNode = new ListNode(val);

    assert.equal(aNode.val, val);
  })

  it('Can store a next node', () => {
    const aNode = new ListNode(0);
    const bNode = new ListNode(1);
    aNode.addNext(bNode);

    assert.equal(aNode.next.val, 1);
  })
});

describe('The Queue class', () => {
  it('Instantiates an empty queue', () => {
    const queue = new Queue;

    const desiredSize = 0;
    assert.equal(queue.size, desiredSize);
  });

  it('Should enqueue an item.', () => {
    const queue = new Queue;
    queue.enqueue(1);

    const desiredSize = 1;
    assert.equal(queue.size, desiredSize);
  });

  it('Do not dequeue from empty queue', () => {
    const queue = new Queue;

    assert.equal(queue.size, 0);

    const result = queue.dequeue();

    assert.equal(result, undefined);
    assert.equal(queue.size, 0);
  });

  it('Should dequeue first item enqueued', () => {
    const queue = new Queue;
    const firstItem = 'a';
    queue.enqueue(firstItem);
    queue.enqueue('b');

    const sizeBeforeDequeue = 2;
    assert.equal(queue.size, sizeBeforeDequeue);
    assert.equal(queue.dequeue(), firstItem);

    const desiredSize = 1;
    assert.equal(queue.size, desiredSize);
  });
});
