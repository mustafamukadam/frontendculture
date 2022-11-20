const tick = Date.now();
const log = (v) => console.log(`${v} : Elapsed: ${Date.now() - tick}ms`);

  const getQuote = async name => {
    if(name === 'one'){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const { title } = await res.json();
    return '1 '+title
    }
    else{
        // const res = await fetch('https://api.kanye.rest/1');
        // const { quote } = await res.json();
        // return 'quote '+quote
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/2');
        const { title } = await res.json();
        return '2 '+title
    }
  }

  const todo1 = ['one','two']
  const todo2 = ['two','one']
  const quoteLoop = async () => {
    // for (const q of todo2) {
    //     const quote = await getQuote(q);
    //     log(quote);
    //   }
    // for(let i=0; i<2;i++){
    //     const quote = await getQuote(todo1[i]);
    //     log(quote);
    // }
    // todo1.forEach(async q=>{
    //     const quote = await getQuote(q);
    //     console.log(q)
    //     log(quote);
    // }) // order NOT guaranteed. Sometimes 1,2 sometimes 2,1

    const res1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const res2 = await fetch('https://jsonplaceholder.typicode.com/todos/3');

    const promises = [res1.json(), res2.json()]

    // looping over promises with await
    for await (const p of promises){
        log(p.title)
    }

  }

quoteLoop()

export const getFruit = async name => {
    const fruits = {
      pineapple: '🍍',
      peach: '🍑',
      strawberry: '🍓'
    };
  
    return fruits[name];
  };


const fruits = ['pineapple','peach','strawberry'];
const fruitLoop = async () => {
  for (const f of fruits) {
    const emoji = await getFruit(f);
    log(emoji);
  }
};

// fruitLoop()



const fruitInspection = async () => {
  if ((await getFruit('peach')) === '🍑') {
    console.log('looks peachy!');
  }
};

const getTodo = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  const { title, userId, body } = await res.json();

  console.log(title, userId, body);
};

