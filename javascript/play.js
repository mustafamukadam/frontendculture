let x = 1;

function func() {
  console.log(x); // undefined
  var x = 2;
}
func();