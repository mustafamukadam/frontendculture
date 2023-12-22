//https://stackoverflow.com/questions/49774769/javascript-uncaught-syntaxerror-identifier-has-already-been-declared
// running here throws Error
// But copy pasting in chrome console does NOT !!!
console.log(a) //output:ƒ a(){}
var a = 1;
function a() { };
var a = 10;
console.log(a) //output:10

// Interesting =
// The function declaration in the block uses ES6 declaration semantics (like let or const), 
// which does not allow re-declarations.