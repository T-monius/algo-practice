## Problem

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if needle is not part of `haystack`.

### Understanding

Search
Input
- 2 strings
  - `needle`
  - `haystack`
Output
- Number
  - Index of first occurence of `needle` in `haystack`

## Examples / Test Cases

haystack = 'sadbutsad'
needle = 'sad'
idx = 0
'sadbutsad'
 p
    ^
  slice = 'sad'
  sad === needle => true => return idx, 0

needle_length = 3
p = index at which to iterate over `haystack`
p1 = p + needle_length
Slice from p -> p1 equal `needle`? yes
- Return index => 0

BigO(n)

## Data structures

- Strings

## Algorithm

Iterate over `haystack`
- `idx` for index at iteration
- `char` for character at iteration
- If `char` equals `needle[0]`, first char
  - Slice from `idx` to `char + needle.length`
  - If the slice and `needle` are equal
    - Return `idx`

Return `-1`