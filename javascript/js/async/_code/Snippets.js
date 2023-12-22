/**
 * async example with a function that return Promise 
 */
const fruits = ['apple', 'banana', 'orange'];

const getFruitColor = async (fruit) => {
  // simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (fruit === 'apple') {
    return 'red';
  } else if (fruit === 'banana') {
    return 'yellow';
  } else if (fruit === 'orange') {
    return 'orange';
  }
};

async function getColor(fruit) {
    const color = await getFruitColor(fruit);
    return color;
  }
  
const fColor = getColor('apple')
console.log('>',fColor)