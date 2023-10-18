//🚖 getFruit() that returns Promise<emoji>
const fruits = ['peach', 'pineapple', 'strawberry'];
const getFruit = async name => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    };

    return fruits[name];
};

// --- 1. async map ---
const smoothie = fruits.map(async v => {
    const emoji = await getFruit(v)
    return emoji
})
console.log(smoothie)
/**
 * smoothie = Promise<emoji>[] because - 
 * 1. map does not wait for the Promise to resolve before moving on to the next element, all the Promise objects are created and executed concurrently
 * 2. async functions always return a Promise object, regardless of whether they contain an await expression or not.
 * note: if you want resolved value print in async method itself, outside async method you will get Promise only (because async method always returns Promise)
 */

// --- 2. async for ---
async function getSmoothie(fruits){
    const emojies = []
    for (let fruit of fruits){
        const emoji = await getFruit(fruit)
        emojies.push(emoji)
    }

    return emojies
}
console.log(getSmoothie(fruits))



/**
 * 📌 Notes:
 * Parallel: map, forEach
 * Sequence: 
 * you need to be careful when using async await in a map or forEach loop, because it won't actually pause the function in this context. It will run all promises concurrently
 * 

https://jrsinclair.com/articles/2019/how-to-run-async-js-in-parallel-or-sequential/
 */