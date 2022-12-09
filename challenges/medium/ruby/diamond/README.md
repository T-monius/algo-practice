# Diamond

## Problem

The diamond exercise takes as its input a letter, and outputs it in a diamond shape. Given a letter, it prints a diamond starting with 'A', with the supplied letter at the widest point.

- The first row contains one 'A'.
- The last row contains one 'A'.
- All rows, except the first and last, have exactly two identical letters.
- The diamond is horizontally symmetric.
- The diamond is vertically symmetric.
- The diamond has a square shape (width equals height).
- The letters form a diamond shape.
- The top half has the letters in ascending order.
- The bottom half has the letters in descending order.
- The four corners (containing the spaces) are triangles.

### Understanding

Input
- String
  - Letter/alpha char
Output
- String
  - Series of the the input char
  - shape of a diamond
    - Columns and rows
    - Starting column `'A'`
       - Leading whitespace
         - As many spaces as position of input letter in alphabet minus one
       - Letter `'A'`
       - Trailing spaces
        - Same as leading
    - Inner columns, up to middle
      - Letter corresponding to position from `'A'` in alphabet (i.e. position 2 is `'B'`)
      - Occurs twice
      - Inner whitespace
        - Increments odd numbers from zero
      - Outer whitespace
        - One less than previous column
    - Middle column, widest
      - Input letter
    - Inner columns, aftermiddle
      - Previous letter from preceding column in alphabet
      - Outer whitespece
        - increments by one
      - Innver whitespace
        - decrements by two until 1, then 0

## Examples / Test Cases

```ruby
input_letter = 'A'
A

=begin
Set current_letter to `'A'`
og_offset = codepoint of input letter from `current_letter` => 0
iterations = `og_offset * 2 + 1` => 1
diamond = ''

idx for iterations
  offset = codepoint of current_letter subtracted from input letter => 0
  inner_spaces = offset > 0 ? offset * 2 - 1 : 0; => 0
  outer_spaces = offset => 0
  row
  If inner_spaces zero
    Add just outer spaces to letter, carriage return
  Else
    Add inner, outer spaces, letter twice, carriage return
  Add row to diamond

  if idx >= og_offset
    Set current_letter to next letter
  else
    Set current_letter to previous letter
  increment idx

Return diamond
=end


input_letter = 'B'

  A
 B B
  A

input_letter = 'C'

  A
 B B
C   C
 B B
  A

```

## Data Structures

- String
- Array

## Algorithm

Set current_letter to `'A'`
og_offset = codepoint of input letter from `current_letter` => 0
iterations = `og_offset * 2 + 1` => 1
diamond = ''

idx for iterations
  offset = codepoint of current_letter subtracted from input letter => 0
  inner_spaces = offset > 0 ? offset * 2 - 1 : 0; => 0
  outer_spaces = offset => 0
  row
  If inner_spaces zero
    Add just outer spaces to letter, carriage return
  Else
    Add inner, outer spaces, letter twice, carriage return
  Add row to diamond

  if idx >= og_offset
    Set current_letter to next letter
  else
    Set current_letter to previous letter
  increment idx

Return diamond