import assert from 'assert';
import { Queue } from '../smplQueue.js';

describe('The Queue class', () => {
  it('Should enqueue an item.', () => {
    const queue = new Queue;
    queue.enqueue(1);

    const desiredSize = 1;
    assert.equal(queue.size(), desiredSize)
  });

  it('Should dequeue first item enqueued', () => {
    const queuue = new Queue;
    const firstItem = 'a';
    queue.enqueue(firstItem);
    queue.enqueue('b');

    const sizeBeforeDequeue = 2;
    assert.equal(queue.size(), sizeBeforeDequeue);
    assert.equal(queue.dequeue(), firstItem);

    const desiredSize = 1;
    assert.equal(queue.size(), desiredSize)
  });
});
