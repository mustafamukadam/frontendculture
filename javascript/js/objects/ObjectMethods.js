const obj = Object.create({});
Object.defineProperty(obj, 'unicorn', {
    value: '🦄'
})
Object.defineProperty(obj, 'fruit', {
    get: () => '🍎',
    enumerable: false
})
console.log(obj.unicorn)
console.log(obj.apple)