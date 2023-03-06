function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}



function checkPrime(isPrime) {
    if (isPrime <= 1) {
        return false
    }
    let i;
    for (i = 2; i <= Math.sqrt(isPrime); i++) {
        if (isPrime % i === 0) {
            return false
        }
    }
    return true
}
