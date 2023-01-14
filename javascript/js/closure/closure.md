# ⭐️⭐️⭐️⭐️ Lexical Environment creation clarity - 
📝 So, counter.[[Environment]] has the reference to {count: 0} Lexical Environment. That’s how the function remembers where it was created, no matter where it’s called. The [[Environment]] reference is set once and forever at function creation time.

Later, when counter() is called, a new Lexical Environment is created for the call, and its outer Lexical Environment reference is taken from counter.[[Environment]]:

💡It means that - 
FIRST - [[Environment]] which is a hidden property associated with function, is created at function creation time.
THEN - when function is called(), __then__ new Lexical Environment is created for that call and 👉its outer Lexical Environment reference is TAKEN from counter.[[Environment]]" 👈

--

Closures are a straightforward side effect of the way scoping rules work in JavaScript.
Know that a function retains access to the scope that it was created in. Know what this enables us to do with our code. Understand that closures allow data hiding, memoization, and dynamic function generation.

Lexical scope: Based on where our code is written, the Javascript engine knows before we even run the code what variables each function has access to.

### closure and memory

1.  closure variables are stored in heap not stack. fireship - https://www.youtube.com/watch?v=vKJpN5FAeF4&t=111s

But also this ...

2. Usually, a Lexical Environment is removed from memory with all the variables after the function call finishes. That’s because there are no references to it. As any JavaScript object, it’s only kept in memory while it’s reachable. However, if there’s a nested function that is still reachable after the end of a function, then it has [[Environment]] property that references the lexical environment. In that case the Lexical Environment is still reachable even after the completion of the function, so it stays alive.
   https://javascript.info/closure#garbage-collection

https://medium.com/swlh/all-you-need-to-know-about-closures-the-first-pillar-of-javascript-5e7ed96f241c

## Putting closures to work.

- Mimicking private variables.
- Using closures with callbacks

## Adv javascript kyle

Closure is when a function remebers its lexical scope even when the function is executed outside that lexical scope

Lexical scope stays attached to that function, no matter where it got transported

Closure is a necessary mechanism for a language with first-class functions as values, to be useful. If functions could be passed around with their values, but they couldn't remember anything about their lexical scope, nobody would pass functions around.

Scope (lexical) life works like GC. As long as there is at least 1 function referencing the scope, scope is kept alive.

## ❤️ javascript.info/closure

When a function runs, at the beginning of the call, a new Lexical Environment is created automatically to store local variables and parameters of the call.
My conclusion: "When a function runs" <-- this makes sense because how else different lexical environment will be created if same function is called multiple times.

The [[Environment]] reference is set once and forever at function creation time.

However, if there’s a nested function that is still reachable after the end of a function, then it has [[Environment]] property that references the lexical environment.

## uses of closures

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

## Notes
### Gist
⭐️⭐️⭐️ Whenever a function is called, a new function **execution context** is created and pushed onto the execution context stack. In addition, a new associated **lexical environment** is created.

What happens if a variable that is declared with the let keyword is redeclared in an inner block scope with the var keyword?
Ans - An error is generated.
What I thought - The var declaration shadows the let declaration.

## closure

That’s what closures are all about. They create a “safety bubble” of the function and the variables in scope at the point of the function’s definition,
so that the function has all it needs to execute.