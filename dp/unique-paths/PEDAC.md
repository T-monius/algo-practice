# Unique Paths

## Problem

There is a robot on an `m x n` grid. The robot is initially located at the top-left corner (i.e., `grid[0][0]`). The robot tries to move to the bottom-right corner (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

Given the two integers `m` and `n`, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to `2 * 109`.

### Understanding

Input
- Integers
  - Represent grid dimenions
  - `1 <= m, n <= 100`
Output
- Integer
  - Total possible unique paths
    - Moving from `grid[0][0]` to `grid[m - 1][n - 1]`

## Examples / Test Cases

|--|--|
|x |  |
|--|--|
|  |o |
|--|--|

Starting position:
x = 0
y = 0

2 possible unique paths:
  1. x + 1, y - 1
  2. y - 1, x + 1

Ways to get to `endPosition` from `currentPosition` are equal to the ways to get to right and beneath neighbors added:
`possiblePaths = uniquePaths(rightNeighbor) + uniquePaths(neighborBelow)`


## Algorithm
### Functional abstraction
- Reduction
  - Reducing `n` paths to a total

Define a helper function/modify `uniquePaths` to take defaults
Parameters
  Current position variable: `{ x: 0, y: 0 }`
  `possiblePaths` default to `0`
  ~~Current Path variable: `''`~~
  `cache={}`
Base case
  - `currentPosition.x + 1 === m - 1 || currentPosition.y + 1 === n - 1`
  - Cache position with value of `1`
  - Return `1`
Body
  - Guard clause to check cache for position
  - Determine neighbors
  - If neighbor below and to right
    - `possiblePaths = uniquePaths(rightNeighbor) + uniquePaths(neighborBelow)`
  - Else if just neighbor to right
    - `possiblePaths = uniquePaths(rightNeighbor`
  - Else
    - `possiblePaths = uniquePaths(neigborBelow)`
  - Cache `currentPosition` and `possiblePaths`
  - Return value for position
