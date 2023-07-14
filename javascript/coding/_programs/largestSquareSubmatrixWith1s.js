function subMatrix(arrA) {
    console.log(arrA)
    let cols = arrA[0].length;
    let row = arrA.length;
    let sub = [];

    for (var y = 0; y < row; y++) {
        sub[y] = [];
        for (var x = 0; x < cols; x++) {
            sub[y][x] = 0;
        }
    }

    // copy the first row
    for (let i = 0; i < cols; i++) {
        sub[0][i] = arrA[0][i];
    }
    // copy the first column
    for (let i = 0; i < row; i++) {
        sub[i][0] = arrA[i][0];
    }

    // for rest of the matrix
    // check if arrA[i][j]==1
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < cols; j++) {
            if (arrA[i][j] == 1) {
                sub[i][j] = Math.min(sub[i - 1][j - 1],
                    Math.min(sub[i][j - 1], sub[i - 1][j])) + 1;
            } else {
                sub[i][j] = 0;
            }
        }
    }
    // find the maximum size of sub matrix
    let maxSize = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < cols; j++) {
            if (sub[i][j] > maxSize) {
                maxSize = sub[i][j];
            }
        }
    }
    return maxSize;
}

let M = [
    [0, 1, 1, 0, 1],
    [1, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0]
];

let M2 = [
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
];
console.log(subMatrix(M2))