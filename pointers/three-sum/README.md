## Problem
Given an integer array `nums`, return all the triplets `[nums[i], nums[j], `nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

### Understanding

Find three numbers that add up to zero
Input
- Array
  - Integer elements
  - No duplicates?
Output
- Array
  - Three numbers
  - Elements of `nums`
  - Add to zero

## Examples / Test Cases

nums = [-1,0,1,2,-1,-4]
           ^
                  ^
                     ^
triplets = [[-1, 0, 1], [-1, -1, 2]]
seen = { [-1, 0, 1]:true, [-1, -1, 2]:true }

## Data Structures

- Array
- Hash

## Algorithm

Instantiate three pointers (i.e. i, j, k)
- Set to 0
Instantiate a hash for seen triplets
Instantiate an empty `triplets` array for return

For `i` upto the end of the `nums`
  Set `j` to `i + 1`
  Iterate from `j` up to `nums.length -1`
    Set `k` to `j + 1`
    For `k` iterate up to end of `nums`
      Access values
      Sort values
      Sum values
      If sum of values equals zero
        Check `seen`
        If not in `seen`
          Set in `seen`
          Add to `triplets`

  return triplets
