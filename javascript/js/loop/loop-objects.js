// 1. Use a For-In Loop
const equine = { horse: "🐴", zebra: "🦓", unicorn: "🦄" };

for (const key in equine) {
  // Filters out properties inherited from prototype, see https://palantir.github.io/tslint/rules/forin/
  if (equine.hasOwnProperty(key)) {
    console.log(equine[key]);
  }
}

// 2. Unwrap the the Values

// for (const val of Object.values(equine)) {
//   console.log(val);
// }

// // 3. Create a Map
// const equine2 = new Map(Object.entries(equine));

// for (const v of equine2.values()) {
//   console.log(v);
// }
