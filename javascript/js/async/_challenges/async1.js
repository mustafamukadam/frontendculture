//? -----------------------------------------------------------------
console.log('A')
async function getData() {
    return await Promise.resolve("I made it!");
}
console.log('getData() ',getData())
console.log('B')

/**
 * Understand this Simple concept to solve below questions:
 * Whenever 'async function getData(){ <inner code> }' encountered it add getData() to event loop and proceed.
 * Once done with all sync code, it executes callbacks in event loop. Now interesting part - it is possible 
 * that there is some other cb waiting BEFORE <inner code> i.e., before getData(),
 * so it will execute that first then <inner code>
 */


//? -----------------------------------------------------------------


//https://github.com/lydiahallie/javascript-questions Q. 102
const myPromise = () => Promise.resolve("I have resolved!");  

function firstFunction() {
  myPromise().then((resp) => console.log("then: ", resp));
  console.log("A");
}

async function secondFunction() {
  console.log("await: ", await myPromise());
  console.log("B");
}

firstFunction();
secondFunction();

/**
 * My conclusion
 * making secondFunction async and adding await - doing this leads to - secondFunction being added to event loop queue. And guess what,
 * then: call is already waiting there in line to be executed first. So everything in secondFunction (including synchronous code) is executed after then:
 * Also: await causes a new event loop tick https://youtu.be/pLMyh9wosBk?t=8490
 */


//? -----------------------------------------------------------------

async function getData1() {
    let p = await Promise.resolve("I made it!");
    console.log('A',)
    return p
  }
  const data1 = getData1();
  console.log('B',)
  console.log("data1",data1);
  
  async function getData2() {
      let data2 = await Promise.resolve("Again, I made it!");
      console.log("data2",data2);
  }
  getData2();
  console.log('C',)

//? -----------------------------------------------------------------
