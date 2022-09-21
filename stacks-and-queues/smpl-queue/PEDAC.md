# Queue

## Problem

Implement a Stack with a Linked List

### Understanding

FIFO

canonical operations
- enqueue: O(1)
- dequeue: O(1)

other operations
- find: O(N)
- 1 direction

Linked List
- Can build just with 'nodes' or a 'list' object
- Dummy node can act as head
- Can traverse one or two ways
- Single-linked
- Node
  - Next property
  - Value property


Hint: your implementation should make the fact that you're using a Linked List trivial to switch out if, say, we wanted to use an Array instead. That is, whoever is using your class shouldn't know you're using a Linked List or Array.
Hint: you might need to track how you store the elements in an attribute (aka ivar)

```ruby
def initialize
  @structure = Node.new('head')
end
```

Hint: pay attention to the time complexity of certain operations of your data structure, and try to use its strengths when building your queue/stack

### Examples / Test Cases

Enqueue two or more items
- Dequeue to confirm that it's the first item enqueued

## Data Structures

- Linked List

## Algorithm

1. Make a `Node` class                        **CHECK**
2. Make queue class
  - Head property                             **CHECK**
    - Instantiated w/ dummy node by default
  - Tail property                             **CHECK**
    - Instantiated w/ head
  - size property                             **CHECK**
3. Make `enqueue` method                      **CHECK**
  - Adds to tail
  - Increments `size`
4. `dequeue` method                           _here_
  - Removes head and makes the next node the head
  - Decrements `size`
5. `size` method reads size
