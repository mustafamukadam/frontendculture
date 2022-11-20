let str = "the_stealth_warrior"

let a = str.split('')
a.forEach((c, i) => {
    if ((c === '-' || c === '_') && !!a[i + 1]) a[i + 1] = a[i + 1].toUpperCase()
});

// console.log('->', str.split(''))
let s = a.join('')
console.log('1', s)
s = s.replace(/-/g, "");
s = s.replace(/_/g, "");
console.log('2', s) // answer