function add(a, b) {
    return a + b
}



function subtract(b, c) {
    return b - c
}



function multiply(a, b) {
    return a * b
}



function divide(a, b) {
    if(b === 0) return "Error"
    return a / b
}

function operate(operator, a,b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a,b);
    } else if (operator === '*') {
        return multiply(a, b) 
    } else if (operator === '/') {
        return divide(a, b);
    } else {
        return 'Invalid operator';
    }
}

console.log(operate('+', 10, 5));

