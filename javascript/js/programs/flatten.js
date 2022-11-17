const a1 = [1, [2, 3]]
const a2 = [1, [2, 3, [4, 5]]]
const a3 = [1, [4, [6, 7], 5], 2, 3, [9, [11, 12], 10]]

// function flatten(arr) {
//   return arr.reduce((acc, current) => {
//     if (Array.isArray(current)) return [...acc, flatten(current)];
//     else return [...acc, current];
//   }, []);
// }

function flatten1(array) {
  // console.log('array: ', array);
  let x = array.reduce(
    (acc, curr) => {
      console.log('curr: ', curr)
      let a = Array.isArray(curr) ? flatten(curr) : curr
      console.log('a ------', a)
      let conc = acc.concat(a)
      console.log('conc: ', conc)
      return conc
    },
    []
  );
  console.log('return: ', x);
  return x
}

function flatten2(array) {
  return array.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flatten2(curr) : curr), [])
}

function flatten3(array) {
  let flattenArray = []

  while (array.length) {
    let item = array.shift()
    if (Array.isArray(item)) array.unshift(...item)
    else flattenArray.push(item)
  }

  return flattenArray
}

console.log('RESULT: ', flatten3(a1))
console.log('RESULT: ', flatten3(a2))
console.log('RESULT: ', flatten3(a3))
