const fibbonacciRecur = (n) => {
    if(n < 0 || !Number.isInteger(n)) {
        return null;
    }
    if ( n <= 1) return n;
    return fibbonacci(n - 1) + fibbonacci(n - 2);
}

const fibbIter = (n) => {
    if(n < 0 || !Number.isInteger(n)) {
        return null;
    }
    if ( n <= 1) return n;
    else{
        let a = 0, b = 1, c;
        for(let i = 2; i <= n; i++){
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
}

const fibbonacci = (n) => {
    // return fibbonacciRecur(n);
    return fibbIter(n);
}

export {fibbonacci};