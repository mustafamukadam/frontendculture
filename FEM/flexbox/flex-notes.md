# Notes
basis: `auto` means width = max-content

⭐️ element > select node > right click > capture node screenshot

link: https://css-tricks.com/equal-columns-with-flexbox-its-more-complicated-than-you-might-think/
Flexbox defaults:
So by default, flex items:

There are a few different ways to get the three columns we want to be equal in width, but some are better than others. For all the approaches, the basic idea is that we want to get all the columns base size to be the same. If they have an equal base size, then they will shrink (or grow, if we use flex-grow) at an equal rate when flexbox does it’s flex things, and in theory, that should make them the same size.

```
.selector {
  flex: 1;
  /* flex-grow: 1; */
  /* flex-shrink: 1; */
  /* flex-basis: 0%; Wait what? */
}
```
// So their base sizes are 0 now, but because of the flex-grow, they can all grow to fill up the empty space.

# equal column width
for equal width column, need to set 2 properties:
- basis: 0%   // its like no discrimination, everyone gets 0 width to begin
- grow:1      // now distribute equally available container width

# flexbox links
https://css-tricks.com/understanding-flex-grow-flex-shrink-and-flex-basis/
Why I use grid over flexbox for this common layout: https://www.youtube.com/watch?v=ctHE8EXEoj8

# Flex properties Default vs other 
flex: grow shrink basis

default (initial) = `0 1 auto`
auto              = `1 1 auto` //after each item is laid out as **max-content** size, grow
1                 = `1 1 0`

---

1. default (0 1 auto)
- don’t grow; `0`
- if they would otherwise overflow the parent, they are allowed to shrink; `1`
- their width acts like max-content. `auto`

- items do not wrap

2. auto (1 1 auto)

3. 1 (1 1 0)
says that all items have zero size, therefore all of the space in the flex container is available to be distributed. 
As all items have a flex-grow factor of 1 they all grow equally and the space is shared equally.

# Tips
- consider Vite for this setup because 1.) auto reload issue (only with external css) in firefox with live server extension 2.) Vite looks fast and cool