function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(4));
/// //
function p(num) {
    // const num = 200;
    let isPrimes;

    if (num < 2) {
        isPrimes = 0;
    }

    for (let i = 2; i <= num; i++) {
        for (let j = 2; j <= i / 2; j++) {
            if (i % j === 0) {
                isPrimes = 0;
                break;
            }
        }
        if (isPrimes === 1) {
            console.log(i);
        }
        isPrimes = 1;
    }
}
p(100);
