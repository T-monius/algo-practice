
## Problem
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.

### Understanding

BST is a recursive data structure
- Built with nodes
  - Nodes `val` cannot be `undefined`


## Examples / Test Cases

          2
        /   \
       1     3

root = [2, 1, 3]

                    4
                  /   \
                1      5
                     /   \
                    3     6

min = -Infinity
max = Infinity
val = 4
root.left.val = 1
root.right.val = 5
  min = -Infinity
  max = 4
  val = 1
  root.right = null
  root.left = null

  min = 4
  max = Infinity
  val = 5
  root.left.val = 3
  root.right.val = 6
    min =
    max = Infinity
    val = 1
    root.right = null
    root.left = null

## Data Structures

- Nodes
- Tree

## Algorithm

-
