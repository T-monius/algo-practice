## Problem

Given a `triangle` array, return the _minimum path sum from top to bottom_.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index `i` on the current row, you may move to either index `i` or index `i + 1` on the next row.

### Understanding

Input
- Array
  - Nested arrays
  - Each index holds a row in the triangle
  - Stacked as a matrix/grid it represents a triangle
  - Each row is one longer than the previous
Output
- Integer?
  - Minimum path sum: path by which values at the path summed are the least possible

Traverse from subarray at index `0` to array at index `triangle - 1` of the array `triangle`

## Examples/Test cases

```js
triangle = [
     [2],
//    ^
    [3,4],
//   ^
   [6,5,7],
//    ^
  [4,1,8,3]
//   ^
]
// Desired Output = 11

row = 0
column = 0 // i in description
coordnate = [row,column] //=> [0, 0]
nextRowSameColumn = [row + 1, column]
nextRowNextColumn = [row + 1, column + 1]
```
Is `nextRowSameColumn` a shorter path OR `NextRowNextColumn`?
- Won't konw until reaching end of path
  - good problem for recursion

## Data structures
- Matrix/array of arrays

## Algorithm
### Fucntional abstraction
- Recursion

Parameters (helper? or add default params)
- triangle
- row, default to 0
- column, default to 0
Base Case
- return value at triangle[row][column] if next row is out of bounds (!triangle[row + 1]) OR (unless triangle[row + 1])

Recur fo nextRowSameColumn and nextRowNextColumn

Add current value to min between values of next row
return sum
