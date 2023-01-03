## Problem

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

### Understanding

Input
- Array
  - Integers
    - Distinct
  - Sorted
- Integer
  - Target
Output
- Integer
  - Index
  - Represents target locion
    - Where found OR where would be instered

## Examples/Test Cases

```js
target = 5
left = 0
right = nums.length - 1
midpoint = 1 // Math.floor(left + (right - left) / 2)
nums = [1,3,5,6]
//      l
//
//        r

target = 2
nums = [1,3,5,6]
//        ^
```

## Data Structures
- Array, given

## Algorithm

Set `left` to zero
Set `right` to `nums.length - 1`

Iterate while `left` is less than `right` minus one
  Set `midpoint` to `Math.floor(left + (right - left) / 2)`
  Return `midpoint` if it's equalt to `target`
  If `midpoint` is greater than target
    Set `right` to `midpoint`
  Else
    Set `left` to `midpoint`

Return `left` if it's equal to `target`
Return `right`