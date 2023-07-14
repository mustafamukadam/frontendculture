function Person(name) {   
   if (!(this instanceof Person)) {    
     return new Person(name);   
   }     
   this.name = name;
}

To protect against the successful use of the Person constructor function without including the new keyword

6. You worry that using an eval() function to evaluate code in JavaScript will allow malicious parties to infiltrate your system. What is a safer method you can use instead?
Function() OR window.Function()

8. You manage a web page that allows external customers to register for a logon account to your company's intranet. The web page has a vulnerability where users can access variable values that have sensitive data. What could you implement to prevent this from happening?
Getters and setters

10. What is one benefit of using Symbol() for unique identifiers?
It is hidden and can be kept private for internal use

14. What happens when the following code is executed?
let foo = {    
  get name(){    
    return this.name;  
  },    
  set name(n){    
    this.name = n;  
  }
}
foo.name = "foo";
A recursive call to the setter will cause a RangeError to be thrown as the maximum call stack size is exceeded.

17. How would you remove the duplicates from the following array using the spread operator?
let array = [0, 1, 1, 2, 3, 4, 4];
let noDups = [...new Set(array)];

20. Which statement correctly assigns the years variable to match the expected behavior on the last line of the following code snippet?
const years = ???
console.log(years['02'] != years[2]) // true
Options: Correct = 2.)
1.) const years = [1950, 1960];
2.) const years = [1950, 1960, 1970];
3.) Incorrect -const years = (1950, 1960, 1970);
4.) Your choice: incorrect -const years = {1950, 1960, 1970};

// -----------

1. Which statement is true about typed arrays?
Typed arrays have their implementation split to achieve maximum flexibility and efficiency.

 Consider the following three promises:
const myPrm1 = new Promise((resolve, reject) => 
                           setTimeout(reject, true, 'Hi!'));
const myPrm2 = new Promise((resolve, reject) => 
                           setTimeout(reject, false, 'World'));
const myPrm3 = new Promise((resolve, reject) => 
                           setTimeout(resolve, true, 'Bye'));
const myPrms = [myPrm1, myPrm2, myPrm3];
How will you create a new promise to return the status (fulfilled/rejected) for all three promises?
Options - (allSettled is correct answer)
Promise.any(myPrms).
  then((s) => s.forEach((stat) => console.log(stat.status)));
Incorrect -
Promise.race(myPrms).
  then((s) => s.forEach((stat) => console.log(stat.status)));
Your choice: correct -
Promise.allSettled(myPrms).
  then((s) => s.forEach((stat) => console.log(stat.status)));
Incorrect -
Promise.all(myPrms).
  then((s) => s.forEach((stat) => console.log(stat.status)));

  11. What is the value of p.age for the Person p if p.age were called after 4,000 milliseconds? 
function Person() {
  this.age = 0;
  setInterval(function growUp() { this.age++; }, 1000);
}
var p = new Person();
answer - 0

12. In the ES6 spec, how would you achieve multiple inheritance of different methods for a given class?
Correct -By using mixins

15. Given the following code, how can the function bar reuse the identifier i without affecting the value of i in foo's scope?
function foo() {
  for (var i = 0; i < 10; i++) {
    (function bar() {
      // need to use an isolated "i" here
    })();
  }
}
Incorrect -Use const instead of var to declare i in foo
Correct -Re-declare i inside bar using var
Your choice: incorrect -Use let instead of var to declare i in foo
Incorrect -Declare i with const outside of foo

17. What arguments are passed to a catch block of a try...catch...finally?
No parameters are passed.
Your choice: correct -The parameter passed to the throw statement. (and NOT wrapped in an Error object.)

19. Which steps would you take to create multiple views on the same binary data?
Create a buffer to hold the data and pass the buffer to two different types of TypedArray constructors.

20. Your website is under attack. A third-party program that you use in your website was compromised and you lost control over making changes to the web application. How could you have created a better defense?
Your choice: incorrect -Only allow third-party code to be modified during delivery.
Incorrect -Create a disclosure on the web application for users.
Incorrect -Disable setting of browser cookies and caching.
Correct -Implement in-house script mirroring.