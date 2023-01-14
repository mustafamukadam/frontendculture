// function sum(a){
//   return function (b){
//     if(b) return sum(a+b)
//     else return a
//   }
// }


// console.log('>>',sum())


function sumArgs(num) {
  let sum = 0
  if (num) {
      sum += num
      return function foo(num) {
          if (num) {
              sum += num
              return foo
          }
          return sum
      }
  }
  else return sum
}

// # Driver
// let result = sumArgs() // 0
let result = sumArgs(2)
console.log('sumArgs: ', result);