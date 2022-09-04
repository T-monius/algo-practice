# Merge Sort

## Problem

Sort an array using the merge sort algorithm

### Understanding

Input
- An array of numbers (or something sortable)
- Arbitrary order
Output
- An array
  - Values sorted

DnC
- Recursive
- Divide
- Recursive call(s)
- Combine

## Examples / Test Cases

```js
const unsortedArray = [3, 1, 7, 9, 2, 14]
const desiredSortedArray = [1, 2, 3, 7, 9, 14]

/*
[3, 1, 7, 9, 2, 14] -> 3
  [3, 1, 7[         -> 1
  [9, 2, 14]
    [3]
    [1, 7[
      [1[
      [7]
    [9]
    [2, 14]

Combining two sorted arrays

combinedArray = [1]

arr = [1]
         ^
secondaryArr = [7]

idx = 1
idx1 = 0
*/
```

## Algorithm

Base Condition: it's a one element array
1. Split array
  - Find middle
  - `Math.floor(arr.length / 2)`
  - Split Upto middle and from middle
2. Make recusive calls on left and right halves storing the return values as variables
3. Return combining the two arrays

Combining two sorted arrays
1. Declare indexes
2. Declare a return array
3. Iterate while both indexes are shorter then their given array lengths
  - Compare values of both arrays at index
  - If val is less than or equal to val1, push it to combined array and increment corresponding idx
     else push val1 to combined array and increment idx1

4. If idx is less than the length of arr
  - Add a splice from the idx of arr to the combinedArray
  - Likewise with idx1 and secondaryArr

5. Return new combined aray

