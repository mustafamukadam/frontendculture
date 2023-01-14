//explanation in "Javascript Ninja 2nd" book, page 140
assert(typeof fun === "function", "We access the function");
var fun = 3;
assert(typeof fun === "number", "Now we access the number");
function fun() {}
assert(typeof fun === "number", "Still a number");
