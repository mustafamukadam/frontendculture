const fruits = ['pineapple','peach', 'strawberry'];
const getFruit = async name => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    };

    return fruits[name];
};

// const smoothie = fruits.map(async v => {
//     const emoji = await getFruit(v)
//     return emoji
// })

// console.log(smoothie)
// Promise.all(smoothie).then(data=>console.log(data))

// async function getSmoothie(fruits){
//     for (let fruit of fruits){
//         const emoji = await getFruit(fruit)
//         console.log(fruit)
//     }
// }
// getSmoothie(fruits)

async function getSmoothie(fruits){
    console.log('A',)
    const emojies = []
    for (let fruit of fruits){
        console.log('F',)
        const emoji = await getFruit(fruit)
        console.log('G',)
        emojies.push(emoji)
    }
    console.log('B:',)
    console.log('Emoji',emojies)
    return emojies
}
getSmoothie(fruits)
console.log('END',)