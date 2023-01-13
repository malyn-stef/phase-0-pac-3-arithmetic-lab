function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(a) {
    a++;
    return a;
}

function decrement(a) {
    a--;
    return a;
}

function makeInt(a) {
    const forceInt = parseInt(a, 10);
    return forceInt;
}

function preserveDecimal(a) {
    const forceDec = parseFloat(a);
    return forceDec;
}