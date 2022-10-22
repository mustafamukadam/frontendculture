function flatten(arr) {
  return arr.reduce((acc, current) => {
    if (Array.isArray(current)) return [...acc, flatten(current)];
    else return [...acc, current];
  }, []);
}

let a = [1, [4, [6, 7], 5], 2, 3, [9, [11, 12], 10]];
console.log(flatten(a));
