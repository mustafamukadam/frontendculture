# concat + spread

`a1.concat(a2)` :

- do not mutate a1 and a2 and return new Array (say, A)
- copies all elements of a1 to A
- for each element in a2 (NOTE: a2 itself is 1 argument, there can be more argument)
  - if primitive or object, add to A
  - if array, add each element independently to A
  - will NOT rescurse further into nested array

That's why -
`let a1 = [ 1,[2] ]`

- `[].concat(a1); // [ 1, [2] ]`

  Since a1 is array, both of its element added and did not unpack [2] because it would be recursive

- `[].concat(...a1); // [1,2]`

  spread will break a1 into 1 and [2] so concat will receive 2 **arguments** 1 and [2]
  It will add 1 to A and unpack [2] and add 2 to A. Note that argument [2] is not nested array in this case.

# Notes

There are 9 methods in total that mutate arrays: pop, push, reverse, shift, sort, splice, unshift, copyWithin and fill.

`for(let v of arr)` // values of arr
`for(let v in arr)` // indices of arr = 0, 1, 2...
