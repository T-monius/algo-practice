## Problem

Given an integer array `nums`, move all `0`'s to the end of _it_ while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

### Understanding

Input
- Array
  - Integer elements
  - Sorted
  - Non-zero
  - Order
Output
- Array
  - Integer elements
  - Zeros moved to the end

## Examples / Test Cases

nums = [1, 3, 12, 0, 0]
#                      w
#                        r

## Data Structures

## Algorithm

Instantiate `w` and `r` to zero

Iterate over the array while `r` is less than `nums.size`
  Access `num` at position of `r`
  Write non-zero `num` to `w` if `num` at are is non-zero
    increment `w`

  Inrement `r`

Iterate while `w` is less than `nums.size`
  Write '0' to idx
  Increment `w`

Return `nums`
