# Climbing Stairs

## Problem

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

### Understanding

Staircase
- Steps

Input
- Integer
  - Represents total steps
Output
- Integer
  - Representing ways to climb steps

`n` won't be less than `2` or greater than `45`

## Examples / Test Cases

Example 1:

```js
/*Input:*/ n = 2
/*Output:*/ 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
```

Example 2:

```js
/*Input:*/ n = 3
/*Output:*/ 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
```
## Data Structure

- Abstractly it's a tree, but n/a

## Algorithm
### Functional abstractions

Ways to climb at a given step is the total of ways from the immediate previous step and penultimate step
- `ways_to_current_step = ways_to_previous_step + ways_to_penultimate_step`

### Hard Algorithm

1. Create base case
  - If `n` is `1` return `1`
  - If `n` is `2` return `2`
2. Return the sum of `n - 1` and `n - 2`
