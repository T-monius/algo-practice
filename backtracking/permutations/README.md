## Problem
Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.

### Understanding

Input
- Array
  - Integer elements
  - __Distinct__
  - Positive?
Output
- Array
  - Sub-arrays
    - Same size as input
    - No duplicates
  - All permutations of a input array

_All permutations_
- Inefficient
  - Lots of iterating
  - Expansive recursion
- Recursion sometimes allows for thinking about a single 'step'/'subproblem' simply

## Examples / Test Cases

candidate = []
results = [[1,2,3],[2,1,3]]
seen_results = {} ?
nums = [1,2,3]
        ^
  candidate = [1]
  results = []
  seen_results = {} ?
  nums = [1,2,3]
          ^
    candidate = [1,2]
    results = []
    seen_results = {} ?
    nums = [1,2,3]
              ^
    candidate = [1,2,3]
    results = []
    seen_results = {} ?
    nums = [1,2,3]
                ^
candidate = []
results = []
seen_results = {} ?
nums = [1,2,3]
          ^
  nums = [1,2,3]
            ^
  candidate = [2]
  results = []
  seen_results = {} ?
  nums = [1,2,3]
          ^
    candidate = [2,1]
    results = []
    seen_results = {} ?
    nums = [1,2,3]
            ^
      candidate = [2,1,3]
      results = []
      seen_results = {} ?
      nums = [1,2,3]
                  ^
## Algorithm
### Functional Abstractions
- Iteration/recursion
- Interrogation

Base Case
- Guard clause
  - Return If `candidate` is longer than `input`
- `candidate` same length as `input`
  - Conditionally store a copy of `candidate` in `results`
    - Condition: `candidate` not in `results`
      - Necessary?
      - Iterating over array w/o dups
      - Skipping same integer in candidate
      - Test w/o
      - Potentially add cache
  - Return

Iterate over `nums` with `num` at iteration
  Skip/next if `num` in `candidate?/`
  Push `num` to `candidate`
  Recursively call method/helper w/ `candidate`
  Pop last `num` from `candidate`

Return
