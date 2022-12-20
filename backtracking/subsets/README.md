
Given an integer array `nums` of unique elements, return all possible subsets (the power set).

The solution set __must not__ contain duplicate subsets. Return the solution in __any order__.

### Understanding

Input
- Array
  - Integer elements
Outpu
- Array
  - Array elements
    - All Subset of input array
    - Subset: an array formed by some set of elemtns of the input array
    - No duplicates in a subset

## Examples / Test Cases

```rb
solutions = [[]]
subset = []
nums = [1,2,3]
#       ^
  solutions = [[], [1]]
  subset = [1]
  nums = [1,2,3]
#           ^
    solutions = [[], [1], [1, 2]]
    subset = [1, 2]
    nums = [1,2,3]
  #             ^
      solutions = [[], [1], [1, 2], [1, 2, 3]]
      subset = [1, 2, 3]
      nums = [1,2,3]
    #               ^

        1
  1, 2

# [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

## Algorithm
Base Case:
  - Subset is longer than input array
    - Return
Success
  - If not in `solutions`, carry cache?
    - Add copy of to `solutions`

Iterate over `nums`
  Skip iteration if `num` is in `subset`
  Add `num` to `subset`
  Call recursion with `subset` (and cache?)
  Pop `num` from `subset`
