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

let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let shouldResetDisplay = false;

const display = document.getElementById('display')
const digitButtons = document.querySelectorAll('.digit')
const operatorButtons = document.querySelectorAll('.operator')
const equalButton = document.getElementById('equal')
const clearButton = document.getElementById('clear')





let currentDisplayValue = '';



digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (shouldResetDisplay) {
            currentDisplayValue = '';
            shouldResetDisplay = false;
        }

        const digit = button.textContent;

        if (currentDisplayValue === '0') {
            currentDisplayValue = digits
        } else {
            currentDisplayValue += digit;
        }

        display.textContent = currentDisplayValue



    })
})


