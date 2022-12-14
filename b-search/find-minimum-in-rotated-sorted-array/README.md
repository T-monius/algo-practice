## Problem

Suppose an array of length `n` sorted in ascending order is rotated between `1` and `n` times. For example, the array `nums = [0,1,2,4,5,6,7]` might become:

`[4,5,6,7,0,1,2]` if it was rotated 4 times.
`[0,1,2,4,5,6,7]` if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

### Understanding

Input
- Array
  - Integers
    - Rotated sorted array
    - Rotated `n` times
      - Necessary to determine how many times it was sorted?
Output
- Integer
  - Minimum value of array

## Examples / Test Cases
```js
left = 0
right = 4   // nums.length - 1
midpoint = 2 // Math.floor(left + (right - left) / 2) => 0 + (4 - 0) / 2

nums = [3,4,5,1,2]
//      l
//          m
//              r

l = 0
r = 6
m = 3
nums = [6,7,0,1,2,4,5]
//      l
//            m
//                  r
  [6,7,0,1]
// l
//     m
//       r
   [6,7,0]
// l
//    m
//      r


nums = [2,4,5,6,7,0,1]
//      l
//            m
//                  r
   [6,7,0,1]
//  l
//      m
//        r
   [6,7,0]
//  l
//    m
//      r

nums = [11,13,15,17]
//      l
//            m
//               r
nums =  [1,2,3,4,5]
//       l
//           m
//               r


nums = [4,5,6,7,0,1,2]

// How determine min to left or right?
//   Compare l and r?
//   Compare elements adjacent to `m`?
// Is the peak to the left or right
//   If num right of `m` is smaller, it's the smallest
//   Else
//
// John's notes:
// - Check num to right m and its <, return that number
// - Compare m to r
//   - If m > r, min in 1st arr
//     - move right
//   - otherwise were in 2nd
//     - move left

```
## Data Structures

- Array

## Algorithm

Set `l` and `r` variables
Set `m`for midpoint to `Math.floor(l + (r - l)/2)`

Iterate while `l + 1 < r` (i.e. `l` and `r` are adjacent)
  Access value at midpoint
  If value to the direct right of `m` is less
    Return it
  Access value at `r`
  If value at `m` is greater than that at `r`
    Set `l` to `m`
  Else
    Set `r` to `m`


Set `minVal` to value at `l` if `l < r`
Else set `r` to `minVal`

Return `minValue`
