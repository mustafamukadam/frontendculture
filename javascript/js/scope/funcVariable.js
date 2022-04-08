//https://stackoverflow.com/questions/49774769/javascript-uncaught-syntaxerror-identifier-has-already-been-declared
console.log(a) //output:ƒ a(){}
var a = 1;
function a() { };
var a = 10;
console.log(a) //output:10