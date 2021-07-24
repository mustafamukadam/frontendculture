/*mimicking private variables*/

function Ninja() {
  var feints = 0;
  this.getFeints = function () {
    return feints;
  };
  this.feint = function () {
    feints++;
  };
}

var ninja1 = new Ninja();
ninja1.feint();
console.log(ninja1.getFeints);


/**
 * Kyle Simpson
 *###  Closure is when a function remebers its lexical scope even when the function is executed outside that lexical scope ###
 
function foo() {
  var a = 5;

  function print() {
    console.log(a);
  }
  outside(print);
}

function outside(print) {
  print();
}

foo();


/**Example of closure */
for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
