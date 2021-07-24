Closures are a straightforward side effect of the way scoping rules work in JavaScript.
Know that a function retains access to the scope that it was created in. Know what this enables us to do with our code. Understand that closures allow data hiding, memoization, and dynamic function generation.

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
