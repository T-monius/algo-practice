## Problem
Input
- Root of binmary tree
Output
- Maximum depth
  - number of nodes along the longet path from root -> farthest leaf node

Constraints
Tree values between `-100 <= Node.val <= 100`
Number of nodes in the tree in range `[0, 10^4]`

### Understanding

Tree searching can be done recursively
Assume a balanced tree? No

## Examples / Test Cases
                    3
                  /   \
                 9     20
                      /   \
                     15    7

counter = 1
root.val = 3
left.val = 9
right.val = 20
  counter = 2
  root = 9
  left = null
  right = null
  counter = 2
  root = 20
  left = 15
  right = 7
    counter = 3
    root = 15
    left = null
    right = null
    counter = 3
    root = 7
    left = null
    right = null

## Algorithm
Base Case -> root is `null`
  Return counter

Increment counter
Retrieve left count
  - Call function recursively with left node and current count
Retrieve right count
  - ^

Return left count if it's greater
Return right count
