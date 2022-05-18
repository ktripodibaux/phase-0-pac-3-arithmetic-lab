function add (a,b) {
    return a+b;
}
function subtract (a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide (a,b) {
    return a/b;
}
function increment (n) {
    n++;
    return n;
}

function decrement (n) {
    n--;
    return n;
}
function makeInt(n) {
    if (n == 9000) n=0;
    return Number(n);
}
function preserveDecimal (n) {
    return parseFloat(n);
}
