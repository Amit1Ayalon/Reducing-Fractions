//setting the inital numerator and denominator
const initialNumerator = 6;
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

    return [n, d];
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
    let fractionsBlock = document.getElementsByClassName("fractionsEqual").item(0);
    const initialNumerator = document.getElementsByTagName("input").item(0).value;
    const initialDenominator = document.getElementsByTagName("input").item(1).value;

    //this is a regex for 1 or more numbers in one line
    //the regex avoid numbers that starts with 0 (e.g 03054, 0123)
    let regex = new RegExp(/^(?!0+)[0-9]+$/);

    if (!regex.test(initialNumerator) || !regex.test(initialDenominator)) {
        alert("One or more of the strings you entered is not a valid number");
        document.getElementsByTagName("input").item(0).value = '';
        document.getElementsByTagName("input").item(1).value = '';
        fractionsBlock.style.visibility = "hidden";
        return;
    }
    fractionsBlock.getElementsByClassName("fraction").item(0).getElementsByClassName("numerator").item(0).innerHTML = initialNumerator;
    fractionsBlock.getElementsByClassName("fraction").item(0).getElementsByClassName("denominator").item(0).innerHTML = initialDenominator;

    let calculatedFraction = reduceMasterFunction(initialNumerator, initialDenominator);

    fractionsBlock.getElementsByClassName("fraction").item(1).getElementsByClassName("numerator").item(0).innerHTML = calculatedFraction[0];
    fractionsBlock.getElementsByClassName("fraction").item(1).getElementsByClassName("denominator").item(0).innerHTML = calculatedFraction[1];


    fractionsBlock.style.visibility = "visible";
}