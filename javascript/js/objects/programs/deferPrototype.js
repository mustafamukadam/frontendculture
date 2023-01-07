Function.prototype.defer = function(ms){
    // setTimeout(this, ms)
    console.log('this',this)
}


function f() {
    alert("Hello!");
  }
  
f.defer(2000); // shows "Hello!" after 2 second