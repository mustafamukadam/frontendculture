/*
from pairs lodash
#lodash #gfe
*/

// ✅ Final
function fromPairs(pairs) {
    let obj = {}
  
    pairs.forEach(pair => {
      obj[pair[0]] = pair[1]
    })
  
    return obj
  }

// gfe solution - https://www.greatfrontend.com/questions/javascript/from-pairs?list=lodash
export default function fromPairs(pairs) {
    const result = {};
  
    for (const [key, value] of pairs) {
      result[key] = value;
    }
  
    return result;
  }