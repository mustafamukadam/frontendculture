function howSum(target, arr) {
    function howS(target, arr, memo = new Map()) {
        if (target == 0) return []
        if (target < 0) return null

        // let combination = []
        for (let a of arr) {
            let result = howS(target - a, arr)
            if (result != null) {
                result.push(a)
                return result
            }
        }

        return null
    }

    return howS(target, arr, new Map())
}


test('should howSum', () => {
    // console.log('-->',howSum(19,[8,1]));
    // console.log('-->', howSum(0, [8, 1]));
    // console.log("2: ", howSum(7, [5, 3, 4, 7]));
    // expect(howSum(7, [5, 3, 4, 7])).toEqual([5, 1, 1])
    // expect(howSum(7, [2, 4])).toEqual(null)
    expect(howSum(19, [8, 1])).toEqual([1, 1, 1, 8, 8,])
});