Array.prototype.myReduce = function(cb, initialValue){
    // ---- Edge cases -----    
    if (!Array.isArray(this)) { // probably required if someone calls my reduce after binding context I think
        throw new Error('Not array');
    }
    // hmm.. make sense
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    if (this.length === 0 && args.length === 1) {
        throw new Error('Array cannot be empty without initial value')
    }

    let isInitValue = initialValue!==null && initialValue!==undefined
    let _accumulator = isInitValue ? initialValue : this[0]
    let startIndex = isInitValue ? 0 : 1;

    for(let i = startIndex; i< this.length; i++){
        _accumulator = cb(_accumulator, this[i])
    }
    return _accumulator
}



// #Driver
let arr = [5,6,7]
let result = arr.myReduce((acc, curr) => acc + curr, 0)
console.log('sum: ', result)

const nums = [1, 2, 3, 4, 5]
const double = nums.myReduce((accum, current) => {
  accum.push(current * 2)
  return accum
}, []);
console.log('double: ', double)
const queryString = "cat=meow&duck=quack&dog=woof";
const queryObject = queryString.split("&").myReduce((accum, current) => {
  const splitString = current.split("=")
  accum[splitString[0]] = splitString[1];
  return accum;
}, {})
console.log('query object: ', queryObject);

/**
 * #STORY
 * reduce((acc, curr)=>{return acc}, initialValue)
 * Gist: for each element of array, call the cb function provided, and keep updating the local private accumulator variable 
 * with return value of cb() in every iteration
 * 
 * Steps-
 * 1. Take as input cb function and optional initialValue
 * 2. initialize local variable '_accumulator' = initialValue || [0]
 * 3. initialize startIndex = initialValue ? 0 : 1
 * 4. for each element of array, call cb(a,b) -> a = _accumulator   ,   b = [i]
 *      NOTE: if initialValue was provided, loop will start from i = 1, else i = 0
 * 4.return _accumulator
 */

// 📍More solutions
https://alphaayush.notion.site/alphaayush/a8610f3dff0a4351a0b343efb7a7f993?v=9bd261462791429abe6aa0324eb58421&p=9c7ad2fe00494a48bfac95fd0ea8e872&pm=s
Array.prototype._myReduce = function(...args) {
    if (!Array.isArray(this)) {
        throw new Error('Not array');
    }
    let callback = args[0];

    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    if (this.length === 0 && args.length === 1) {
        throw new Error('Array cannot be empty without initial value')
    }

    let result = args.length > 1 ? args[1] : this[0];

    for (let i = arguments > 1 ? 0 : 1; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }

    return result
}