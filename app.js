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
    let commonPrime;
    if (n < d) {
        commonPrime = findCommonPrime(n, d);
    } else {
        commonPrime = findCommonPrime(d, n);
    }

    if (commonPrime != null) {
        n /= commonPrime;
        d /= commonPrime;
    }
    return [n, d];
}

function findCommonPrime(num, numToMatchPrime) {
    for (let i = 1; i <= num; i++) {
        if (isPrime(i) && num % i === 0 && isPrimeMatch(i, numToMatchPrime)) {
            return i;
        }
    }
    return null;
}

function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function isPrimeMatch(prime, numToMatchPrime) {
    if (numToMatchPrime % prime === 0) return true;
    return false;
}

function calculateFractionAndPresent() {
    //getting values from the html page
    let fractionsBlock = document.getElementsByClassName("fractionsEqual").item(0);
    const initialNumerator = document.getElementsByTagName("input").item(0).value;
    const initialDenominator = document.getElementsByTagName("input").item(1).value;

    //this is a regex for 1 or more numbers in one line
    //the regex avoid numbers that starts with 0 (e.g 03054, 0123)
    let regex = new RegExp(/^(?!0+)[0-9]+$/);

    //check for valid numbers (natural numbers)
    if (!regex.test(initialNumerator) || !regex.test(initialDenominator)) {
        alert("One or more of the strings you entered is not a valid number");
        clearFields();
        return;
    }

    //setting the values the user picked to the page
    fractionsBlock.getElementsByClassName("fraction").item(0).getElementsByClassName("numerator").item(0).innerHTML = initialNumerator;
    fractionsBlock.getElementsByClassName("fraction").item(0).getElementsByClassName("denominator").item(0).innerHTML = initialDenominator;

    //calculating the reduced fraction
    let calculatedFraction = reduceMasterFunction(initialNumerator, initialDenominator);

    //setting the values of the calculated fraction to the page
    fractionsBlock.getElementsByClassName("fraction").item(1).getElementsByClassName("numerator").item(0).innerHTML = calculatedFraction[0];
    fractionsBlock.getElementsByClassName("fraction").item(1).getElementsByClassName("denominator").item(0).innerHTML = calculatedFraction[1];

    //setting the fractions to visible
    fractionsBlock.style.visibility = "visible";
}


function clearFields() {
    document.getElementsByTagName("input").item(0).value = '';
    document.getElementsByTagName("input").item(1).value = '';
    document.getElementsByClassName("fractionsEqual").item(0).style.visibility = "hidden";
}