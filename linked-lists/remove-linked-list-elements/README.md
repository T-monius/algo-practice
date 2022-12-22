## Problem

Given the `head` of a linked list and an integer `val`, remove all the nodes of the linked list that has `Node.val == val`, and return the __new head__.

### Understanding

Input
- Node
  - Head of a linked list
  - Node as a class pattern of representing a linked list (i.e. v. `LinkedList` class pattern)
- `val`
  - Integer
Output
- Node
  - New head
  - Linked list nodes containing `val` having been removed

Traversal

## Examples / Test Cases

// { val: 6, next:{val:1,next:{val: 2,next: ... }}}
head = [6,1,2,6,3,4,5,6], val = 6
//      ^
dummy_head = { val: 0: next: null}
previous_node = { val: 0: next: next:{val:1,next:{val: 2,next: ... }} }
current_node = { val:1,next:{val: 2,next: ... }  }

// In reality head = {val:1, next:{ val: 2, next: ... }}
head = [1,2,6,3,4,5,6], val = 6
//    ^
head = { val:1, next:{ val: 2, next: ... } }
previous_node = { val: 3, next:{val:4, next:{val:5, next: ...}} }
// ^ instantiate to a dummy?
current_node = { val:4, next:{val:5, next: ...} }

## Algorithm
### Functional abstractions
Iteration

Instantiate `dummy_head`, `previuos_node`, and `current_node` values
  - Set `dummy_head.next` to `head`
  - Setting `previuos_node` to `dummy_head`

iterate while `currnt_node`
  If `current_node.val` is equal to `val`
    Set `previous_node.next` to `current_node.next`
  Else
    Set `previous_node` to `current_node`
  Set `current_node` to `current_node.next`

Return `dummy_head.next`
