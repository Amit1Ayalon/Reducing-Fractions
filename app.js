//setting the inital numerator and denominator
const initialNumerator = 4;
const initialDenominator = 16;


function reduceMasterFunction(numerator, denominator) {
    let stopReduce = false;
    let n = numerator;
    let d = denominator;
    while (true) {
        if (stopReduce) break;

        fraction = reduceFraction(n, d);

        if (fraction[0] === n && fraction[1] === d) stopReduce = true;

        n = fraction[0];
        d = fraction[1];
    }

    console.log("numerator: " + n);
    console.log("denominator: " + d);
}


function reduceFraction(n, d) {
    let primes;
    let commonPrime;
    if (n < d) {
        primes = findPrimes(n);
        commonPrime = FindPrimeMatch(primes, d);
    } else {
        primes = findPrimes(d);
        commonPrime = FindPrimeMatch(primes, n);
    }

    if (commonPrime != null) {
        n /= commonPrime;
        d /= commonPrime;
    }
    return [n, d];
}

function findPrimes(num) {
    let primesList = [];
    for (let i = 1; i <= num; i++) {
        if (isPrime(i) && num % i === 0) primesList.push(i);
    }
    return primesList;
}

function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function FindPrimeMatch(primesList, numToMatch) {
    for (let i = 0; i < primesList.length; i++) {
        if (numToMatch % primesList[i] === 0) return primesList[i];
    }
    return null
}

function buttonClicked() {
    document.getElementsByClassName("fractionsEqual").item(0).style.visibility = "visible";
}


reduceMasterFunction(initialNumerator, initialDenominator);