// There are 3 ways you could WANT promises to resolve

// parallel (all together)
// sequential (1 after another)
// race (doesn't matter who wins).
const tick = Date.now();
const log = (v) => console.log(`${v}    |  ⏱️ ${Date.now() - tick}ms`);

const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `parallel is done: ${output1} ${output2} ${output3}`;
}

async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `sequence is done: ${output1} ${output2} ${output3}`;
}

async function race() {
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `race is done: ${output1}`;
}

sequence().then(log);
parallel().then(log);
race().then(log);
// race is done: a
// parallel is done: a b c
// sequence is done: a b c

// https://drive.google.com/file/d/1fI_UGuBCkBqlfy7-c-KCs8EHYnQzIwl6/view