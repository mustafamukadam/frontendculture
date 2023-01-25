//https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md#q-display-all-the-keys-and-values-of-a-nested-object
//Q. Display all the keys and values of a nested object

//print only keys
// function printKeyValues(obj){
//   for(const key in obj){
//       if(typeof obj[key] === 'object') {
//         console.log('>',key)        
//         printKeyValues(obj[key])
//       }
//       else console.log('>',key) 
//   }
// }
// their solution
function keyValuePrinter(obj) {
    for (let key in obj) {
      if (typeof obj[key] !== "object") {
        console.log("[" + key + " : " + obj[key] + "]");
      } else {
        keyValuePrinter(obj[key]);
      }
    }
  }
  
  let o = {
    a: 1,
    b: {
        c: 2
    },
    d: 3
  }
  
  // printKeyValues(o)
  keyValuePrinter(o)
  
  