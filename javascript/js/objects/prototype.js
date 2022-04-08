const organism = {
    dna: Math.random()
}

const obj = Object.create(organism)

// proto
console.log(organism.__proto__ === Object.prototype)
console.log(obj.__proto__ === organism)

// hasOwnProperty
console.log(organism.hasOwnProperty('dna'))
console.log(obj.hasOwnProperty('dna'))
console.log(obj.dna)

// getPrototypeOf
console.log(Object.getPrototypeOf(obj))
console.log(Object.getPrototypeOf(organism))