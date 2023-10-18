function canConstruct(target, arr, memo = new Map()){
    //base case
    if(target === '') return true

    if(memo.has(target)) return memo.get(target)

    //recurrence relation
    for(let str of arr){
        let result = target.startsWith(str) ? canConstruct(target.replace(str, ''), arr) : false
        memo.set(target, result)
        if(result) return true
    }
    return false
}

test('canConstruct', () => {
    // console.log("👉",canConstruct('abcdef',['ab', 'abc', 'cd', 'def', 'abcd']))
    // console.log("👉",canConstruct('skateboard',['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
    expect(canConstruct('skateboard',['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])).toEqual(false);
    expect(canConstruct('abcdef',['ab', 'abc', 'cd', 'def', 'abcd'])).toEqual(true);
});