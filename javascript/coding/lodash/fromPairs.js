// ✅
// my solution - all test pass on gfe
function fromPairs(pairs) {
    let obj = {}
  
    pairs.forEach(pair => {
      obj[pair[0]] = pair[1]
    })
  
    return obj
  }

/**
#gfe
Links:
https://www.greatfrontend.com/questions/javascript/from-pairs?list=lodash
*/

// gfe solution
export default function fromPairs(pairs) {
    const result = {};
  
    for (const [key, value] of pairs) {
      result[key] = value;
    }
  
    return result;
  }

/**
 * Notes:
 * for vs 
 */