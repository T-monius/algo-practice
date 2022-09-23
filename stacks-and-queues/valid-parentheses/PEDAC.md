# Valid Parentheses

## Problem

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

### Understaning

A closing paren cannot be immediately preceded by an opening paren of a different type
Multiple opening parens can arbitrarily follow one another; however, closing parens must match opening.

A Stack matches
- All parens added to stack
- FIFO
  - Last paren can be removed from stack to compare to current closing
  - Both removed if matching
- If stack empty at end of input string, it's valid

## Examples / Test Cases

Example 1:

```js
const CLOSERS =  { ')':'(', ']':'[', '}':'{' };
const OPENERS = { '(':true, '[':true, '{':true }
const stack = ['('];
//              ^
Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
//           ^
Output: false
````

Constraints:

`1 <= s.length <= 104`
`s` consists of parentheses only `'()[]{}'`.

## Data Structures

- Object/dict
  - 'CLOSERS'
  - 'OPENERS'
- Stack
  - Array

## Algorithm

Guard clause for string length
Create stack of 'seen' parens
Iterate over input string
- Return `false` if current char not a paren
- Push `char` to stack if it's an opening paren
  - continue
- If `char` closes last opener on stack
  - Pop from the stack
  - Continue
- Else
  - Return `false`
Return result of whether stack is empty
