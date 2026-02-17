const fibbonacci = (n) => {
    if(n < 0 || !Number.isInteger(n)) {
        return null;
    }
    if ( n <= 1) return n;
    return fibbonacci(n - 1) + fibbonacci(n - 2);
}

export {fibbonacci};