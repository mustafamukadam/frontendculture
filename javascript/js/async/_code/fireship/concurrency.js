// getFruit() that returns Promise<emoji>
const fruits = ['peach', 'pineapple', 'strawberry'];
const getFruit = async name => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    };

    return fruits[name];
};

// 1. async-await with Promise.all
const makeSmoothieFaster = async() => {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');

    const smoothie = await Promise.all([a, b])

    return smoothie;
}

// 2. async-await with Promise.race
const fruitRace = async() => {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');

    const winner = await Promise.race([a, b])

    return winner;
}

// fruitRace().then(log)
// fruitRace().then(log)
// fruitRace().then(log)
// fruitRace().then(log)
// fruitRace().then(log)