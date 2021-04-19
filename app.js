//setting the inital numerator and denominator
const initialNumerator = 3;
const initialDenominator = 6;

function findPrime(stopNum) {
    let primelist = [];
    for (let i = 1; i <= stopNum; i++) {
        if (isPrime(i)) primelist.push(i);
    }
    console.log(primelist);
}

function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num >= 1;
}


findPrime(111);