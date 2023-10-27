/*
returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
#string #codewars
*/

// ✅ Final
function stringEndsWith(str, ending){
    let startIndex = str.length - ending.length
    let endIndex = str.length

    return str.substring(startIndex, endIndex) === ending
}

// let input = "samurai", "ai"
console.log(stringEndsWith("samurai", "ai"))
  

// Additional stringEndsWiths, explanations or comments
/**
 * String methods - substring(), substr()
*/

// someones nice working solution-
return str.substr(-ending.length) == ending;

