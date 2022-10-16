let p = new Promise(function (resolve, reject) {
  //   resolve(1);
  return 5;
}).then(function (result) {
  console.log(result); // never executed
});
console.log(p); // pending state, never settled
