//https://github.com/ayush013/javascript-code-challenges/blob/main/challenges/functions-challenges.md#design-a-private-counter-function-which-exposes-increment-and-retrive-functionalities
//Design a private counter function which exposes increment and retrive functionalities

function privateCounter() {
    let count = 0;
    return {
        increment(value = 1) {
            return count += value;
        },
        get() {
            return count;
        }
    }
}

let counter = privateCounter();

console.log(counter.get())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.get())