https://fireship.io/courses/javascript/beginner-js-functions/
https://javascript.info/new-function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function

arrow functions are Always an expression, never a statement.

## Function

Whatever we can do with objects, we can do with functions as well. Functions are objects, just with an additional, special capability of being invokable: Functions can be called or invoked in order to perform an action.

Every JavaScript function is actually a Function object. This can be seen with the code (function(){}).constructor === Function, which returns true.

Contrast this with the concept that -
new foo() returns "object" but new Function() returns "function"
because Function is used to **create** function
Function is a constructor.

the Function constructor creates functions that execute in the global scope only. Usually, a function remembers where it was born in the special property [[Environment]]. It references the Lexical Environment from where it’s created
But when a function is created using new Function, its [[Environment]] is set to reference not the current Lexical Environment, but the global one.

So:

- typeof Function is "function"
- Function() creates a function object
- new on regular function() creates an object
- new on Function() creates a function (and yes function are object)
- So Function is a contructor that creates function (or Function object)

- difference between Function() and new Function() ??
  ans: Invoking the Function constructor as a function (without using the new operator) has the same effect as invoking it as a constructor.

  ### Function instance properties:

  - arguments
  - caller
  - length
  - name
  - displayName

In JavaScript, the fundamental unit of execution is a function.

## Arrow functions

arrow functions do not have this. If this is accessed, it is taken from the outside.

https://javascript.info/arrow-functions

## Function Values

```
var someObj = {};
someObj.someProperty = "hey, I have a property now";

var someFunc = function(a, b) { return a > b; };
someFunc.someProperty = "hey, I have a property now, too";
```

Thus, anything you can do to an object, you can do to a function. However, function objects have an internal property (a notional property accessible to the JavaScript execution engine, but not accessible to JavaScript code) called [[Code]], and another internal property called [[FormalParameters]].
