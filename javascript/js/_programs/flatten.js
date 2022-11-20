// // https://exercism.org/tracks/javascript/exercises/flatten-array/solutions?
/*
----------------------------- 📌 Solutions -----------------------------
*/

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

function flatten4(array) {
  const res = [];
  // const copy = array.slice();

  while (array.length) {
    const item = array.shift();
    if (Array.isArray(item)) {
      array.unshift(...item);
    } else {
      res.push(item);
    }
  }

  return res
}

const flatten5 = (arr) => arr.reduce((flat, next) => flat.concat(next), []);

// 🤯
function flattenOnlyNumbers(array) {
  return array
    .toString()
    .split(',')
    .map((numStr) => number(numStr));
}

const flattenNull = (array) => {
  return array.reduce((acc, curr) => {
    if (curr !== 0 && !curr) return acc
    return acc.concat(Array.isArray(curr) ? flattenNull(curr) : curr)
  }, [])
}

/*
----------------------------- 💾 Input data and Driver  -----------------------------
*/

let inputs = [
  [1, [2, 3]],
  [1, [2, 3, [4, 5]]],
  [1, [4, [6, 7], 5], 2, 3, [9, [11, 12], 10]],
  [1, 2, null],
  [1, 2, undefined],
  [1, 2, null, undefined],
]

for (let input of inputs) {
  console.log('result: ', flatten5(input))
}

/* 
----------------------------- 🌎 Links -----------------------------
https://exercism.org/tracks/javascript/exercises/flatten-array/solutions?
*/

/*
----------------------------- 🗑 Archive -----------------------------
*/



/* Archive
// function flatten(arr) {
//   return arr.reduce((acc, current) => {
//     if (Array.isArray(current)) return [...acc, flatten(current)];
//     else return [...acc, current];
//   }, []);
// }
*/