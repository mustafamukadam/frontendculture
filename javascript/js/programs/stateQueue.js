function getFinalState(baseState, queue) {
    let finalState = baseState;

    // TODO: do something with the queue...
    for (let update of queue) {
        if (typeof update === 'number')
            finalState = update
        else if (typeof update === 'function')
            finalState = update(finalState)
    }
    return finalState;
}

let r = getFinalState(0, [5, (n) => n + 1]); // 6
console.log(r);

/**
   instead of ->
queue.forEach(q => {})

    do ->
for (let q of queue) {
 */