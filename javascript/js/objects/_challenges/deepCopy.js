function deepCopy(obj) {
    if (!obj) return obj;
  
    const copyObj = {};
    for (const key in obj) {
      // if primitve or []
      //Array.isArray(obj[key])
      if (typeof obj[key] === "object" && !Array.isArray(obj[key]))
        copyObj[key] = deepCopy(obj[key]);
      else if(Array.isArray(obj[key]))
        copyObj[key] = [...obj[key]]
      else 
        copyObj[key] = obj[key];
    }

    return copyObj;
  }
  
  let obj = {
    a: 1,
    b: {
        c: 2,
        d: ['x','y']
    },
    e: 3
}

let clone = deepCopy(obj)
console.log('clone:',clone)
// console.log('obj: ', obj)

// clone.b.d[1] = "woah!"

// console.log('obj again: ', obj)

