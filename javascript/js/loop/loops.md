https://fireship.io/snippets/javascript-loops-pro-tips/

## You have three main options when looping or iterating over values in JS.

1. for - fastest, but ugly on the eyes
2. forEach - fast and designed for functional code
3. for-of - slowest, but most sugary

4. for (but backwards) - absolute fastest - but terrible to look at and work with

Certain things in Javascript are iterables like **arrays, map, string**

Array implements iterator function that allows it to be looped over - arr[Symbol.iterator]

## iterate over objects

In JavaScript, Object s are not iterable unless they implement the iterable protocol
