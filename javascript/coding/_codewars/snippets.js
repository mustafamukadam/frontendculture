//👉 find minimum index or value: https://www.codewars.com/kata/544a54fd18b8e06d240005c0/javascript
const min = (arr, toReturn) => toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
const min2 = Math.min.apply(null, arr) // works, returns minimum.
