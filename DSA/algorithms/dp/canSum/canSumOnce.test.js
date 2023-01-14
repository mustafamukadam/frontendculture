// let memo = new Map()
function canSum(target, i = 0, arr){
    // base condition
    if(target === 0) return true
    if(target < 0 || i > arr.length - 1) return false

    // return true if either of the leg leads to true
    return canSum(target-arr[i], ++i, arr) || canSum(target, ++i, arr)
}




test('canSum without memo', () => {
    console.log("👉",canSum(8, 0, [3,2,3]))
    expect(canSum(8, 0, [3,2,3])).toEqual(true);
    expect(canSum(3, 0, [1,1,1])).toEqual(true);
    expect(canSum(12, 0, [4,4])).toEqual(false);
    expect(canSum(5, 0, [3,1])).toEqual(false);
});

test.skip('canSum memo required', () => {
    // console.log("👉",canSum(8, 0, [3,2,3]))
    expect(canSum(5, 0, [3,1])).toEqual(false);
});