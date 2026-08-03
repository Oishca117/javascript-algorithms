function sumAll([n, m]) {
    let sum = 0;
    if (n < m) {
        for (let i = n; i <= m; i++) {
            sum += i;
        }
    } else if (m < n) {
        for (let i = m; i <= n; i++) {
            sum += i;
        }
    }
    return sum;

}

/******************************/

//refactored version

function sumAll([n, m]) {
    let sum = 0;
    const start = Math.min(n, m);
    const end = Math.max(n, m);

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}