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

##

instead of

```
queue.forEach(q => {})
```

do

```
for (let q of queue) {
```

## 
Is reduce() bad? - HTTP 203 - https://www.youtube.com/watch?v=qaGjS7-qWzg&list=PLNYkxOF6rcIAKIQFsNbV0JDws_G_bnNo9&index=47
Scope in JavaScript - HTTP 203 - https://www.youtube.com/watch?v=5LEuJNLfLN0&list=PLNYkxOF6rcIAKIQFsNbV0JDws_G_bnNo9&index=56
JavaScript for-loops are… complicated - HTTP203 - https://www.youtube.com/watch?v=Nzokr6Boeaw&list=PLNYkxOF6rcIAKIQFsNbV0JDws_G_bnNo9&index=80
