// let p = Promise.resolve('done!')
// console.log('p', p)
// let p1 = Promise.resolve(p)
// console.log('p1 === p', p1 === p)
// console.log('p1', p1)
// p1.then(data => console.log(data))

// console.log('p2', new Promise((res,rej)=>{}))


// async function getData1() {
//   let p = await Promise.resolve("I made it!");
//   console.log('A',)
//   return p
// }
// const data1 = getData1();
// console.log('B',)
// console.log("data1",data1);

// async function getData2() {
//     let data2 = await Promise.resolve("Again, I made it!");
//     console.log("data2",data2);
// }
// getData2();
// console.log('C',)

// const myPromise = () => Promise.resolve("I have resolved!");  

// function firstFunction() {
//   myPromise().then((resp) => console.log("then: ", resp));
//   console.log("A");
// }

// async function secondFunction() {
//     console.log("await: ", await myPromise());
// }

// firstFunction();
// secondFunction();
// console.log("B");

// console.log('A')
// async function getData() {
//     let p = await Promise.resolve("I made it!");
//     return p
// }
// console.log('getData() ',getData())
// console.log('B')



console.log('A', Promise.resolve("1 I have resolved!")); // Promise {<fulfilled>: 'I have resolved!'}
console.log('B', Promise.resolve("2 I have resolved!").then('then', console.log)); //I have resolved!