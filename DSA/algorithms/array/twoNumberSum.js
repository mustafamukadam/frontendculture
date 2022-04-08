/**
 * This is a variation of the subset sum problem
 */

export default function twoNumberSum() {
  //   let a = [2, 11, 7, 15];
  let a = [3, 2, 4];
  let sum = 6;

  a.sort((a, b) => a - b);
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] + a[i] === sum) return [a[j], a[i]];
    }
  }

  return -1;
  //   console.log(a);
}

