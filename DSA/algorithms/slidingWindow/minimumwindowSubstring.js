function isDesirable(s, o2, t, i, j) {
    let o1 = {};
    for (let q = i; q <= j; q++) {
        o1[s[q]] = o1[s[q]] === undefined ? 1 : ++o1[s[q]];
    }

    let flag = true;
    for (let p = 0; p < t.length; p++) {
        if (o1[t[p]] === undefined || o1[t[p]] < o2[t[p]]) flag = false;
    }
    // console.log(o1,o2)
    return flag;
}

export default function minWindow(s, t) {
    if (t.length > s.length) return "";

    const ssize = s.length;
    const tsize = t.length;
    let w = [0, ssize];

    let o2 = {};
    for (let n = 0; n < t.length; n++) {
        o2[t[n]] = o2[t[n]] === undefined ? 1 : ++o2[t[n]];
    }

    let shrink = false;
    for (let i = 0, j = i + (tsize - 1); i <= (ssize - tsize) && j < ssize;) {
        if (isDesirable(s, o2, t, i, j)) {
            if ((j - i) < w[1] - w[0]) w = [i, j];
            if ((j - i) > tsize) { i++; shrink = true; }
            else j++;
        }
        else {
            if (shrink) {
                --i;
                shrink = false;
            }
            j++;
        }
    }
    let str = (w[1] != tsize) ? s[w[0]] : '';
    for (let i = w[0] + 1; i <= w[1]; i++) {
        str = str.concat(s[i])
    }
    // console.log(isDesirable(s,t,0,2))
    return str;
};