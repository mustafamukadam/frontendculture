Learn cache in browser
https://www.greatfrontend.com/questions/quiz
⭐️⭐️ https://replit.com/@li_kai/JavaScript-Cheatsheet#index.js
⭐️ https://www.frontendinterviewhandbook.com/blog/a-glimpse-into-front-end-interviews
## Tips
- Markdown editing tips - https://code.visualstudio.com/docs/languages/markdown
- understand how libraries comment their code
cmd+shift+v to preview md in next tab (without split)
command+. in vscode for refactoring (like convert function to class)
- Make notes in Udemy courses
- Github - add Javascript questions, QnA ...
Pratise question from course - https://servicenow.udemy.com/course/modern-javascript/learn/lecture/9873198#overview
Download exercise files from courses - Pluralsight, udemy...
    https://github.com/jonasschmedtmann/complete-javascript-course
Console Ninja extension

⭐️ Write Story for every important problem that you solve

# Resources
courses on educative - with assessments
https://www.educative.io/mycourses?filter_type=all
even udemy is not that bad

## good exercise solution pattern

https://frontendmasters.com/courses/js-fundamentals-functional-v2/
https://frontendmasters.com/courses/js-fundamentals-functional-v2/scope-walkthrough-part-1/ (scope)

There are two main types of JavaScript code:
**global** code, placed outside all functions, and
**function** code, contained in functions.

When our code is being executed by the JavaScript engine, each statement is executed in a certain execution context

we have two types of execution contexts:
**global execution context**
**function execution context**

There’s only one global execution context, created when our JavaScript program starts executing,
whereas a new function execution context is created on each function invocation.

Lexical environments are an internal implementation of the JavaScript scoping mechanism, and people often colloquially refer to them as _scopes_

![Lexical Environment](lexical.png)

Whenever a function is called, a new function execution context is created and pushed onto the execution context stack. In addition, a new associated lexical environment is created.

Page: 143

## data types

JavaScript only has primitive types and objects.

Primitive types are `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, and `symbol`.

What differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that `'foo'.toUpperCase()` evaluates to `'FOO'` and does not result in a `TypeError`. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the primitive type using one of the wrapper classes, i.e. `String`, and then immediately discard the wrapper after the expression evaluates. All primitives except for `null` and `undefined` exhibit this behaviour.

## event loop

The entire script is initially executed as a macro task

This means that the JS Engine is just an on-demand execution environment for any arbitrary JS code.
So, for example, when your JavaScript program makes an Ajax request to fetch some data from the server, you set up the “response” code in a function (the “callback”), and the JS Engine tells the hosting environment:
“Hey, I’m going to suspend execution for now, but whenever you finish with that network request, and you have some data, please call this function back.”

It’s interesting to note that ES6 specifies how the event loop should work, meaning that technically it’s within the scope of the JS engine’s responsibilities, which is no longer playing just a hosting environment role. One main reason for this change is the introduction of Promises in ES6 because the latter require access to a direct, fine-grained control over scheduling operations on the event loop queue

## building the page at runtime

When the browser reaches the script node in the page-building phase, it pauses the DOM construction based on HTML code and starts executing JavaScript code instead.

## Lexical

Lexical environments are an internal implementation of the JavaScript scoping mechanism, and people often colloquially refer to them as scopes.

Each execution context has a lexical environment associated with it that contains the mapping for all identifiers defined directly in that context.

Whenever a function is called, a new function execution context is created and pushed onto the execution context stack. In addition, a new associated lexical environment is created.

In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.

# Questions

Implement Promise/Promise-related APIs: Promise, Promise.all

# Js toolbox

arr.slice() to create copy of array

# Notes

as of this writing, in chrome, the number of recursive calls you can make is around 10 thousands and in Firefox it is 50 thousands
https://www.greatfrontend.com/questions/javascript/flatten

