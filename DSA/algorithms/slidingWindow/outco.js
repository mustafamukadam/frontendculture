function minimumWindowSubstring(str, substr) {
    let lettersSeen = {};
    let lettersNeeded = {};
    let lettersMissing = 0;

    for (let i = 0; i < substr.length; i++) {
        if (substr[i] in lettersNeeded) {
            lettersNeeded[substr[i]] += 1;
        } else {
            lettersNeeded[substr[i]] = 1;
            lettersSeen[substr[i]] = 0;
            lettersMissing += 1;
        }
    }

    console.log(lettersSeen, lettersNeeded, lettersMissing)

    let fast = 0;
    let slow = 0;
    let result = [-Infinity, Infinity];

    for (fast; fast < str.length; fast++) {

        // if fast in "AABC" -> seen[A]+=1
        //if seen[A]==needed[A] -> lettersMissing -=1
        if (str[fast] in lettersNeeded) {
            lettersSeen[str[fast]] += 1;
            if (lettersSeen[str[fast]] === lettersNeeded[str[fast]]) {
                lettersMissing -= 1;
            }
        }

        while (lettersMissing === 0) {
            // if smaller window -> make it desirable
            if (fast - slow < result[1] - result[0]) {
                result[0] = slow
                result[1] = fast
            }

            if (str[slow] in lettersNeeded) {
                lettersSeen[str[slow]] -= 1;
                if (lettersSeen[str[slow]] < lettersNeeded[str[slow]]) {
                    lettersMissing += 1;
                }
            }

            slow++;
        }
    }

    return result[0] === -Infinity ? "" : str.slice(result[0], result[1] + 1);
}

console.log(minimumWindowSubstring("a", "aa"))
// minimumWindowSubstring("ADOBECODEBANC", "ABCC")
// console.log(minimumWindowSubstring("ADOBECODEBANC", "ABC"))
// console.log(minimumWindowSubstring("AADOBEC ODAEBANC", "AABC"))
// minimumWindowSubstring("ADOBECODAEBANC", "AABC");