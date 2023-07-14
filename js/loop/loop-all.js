const mil = 1000000;
const arr = Array(mil);

console.time("⏲️");

// 1. for
for (let i = 0; i < mil; i++) { } // 1.6ms

// 2. for-of
for (const v of arr) { } // 11.7ms

// 3. forEach
arr.forEach((v) => v); // 2.1ms

// 4. for but backwards
for (let i = mil; i > 0; i--) { } // 1.5ms

console.timeEnd("⏲️");
