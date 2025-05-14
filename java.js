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
const equalsButton = document.getElementById('equal')
const clearButton = document.getElementById('clear')
const decimalButton = document.getElementById('decimal')
const backspaceButton = document.getElementById('backspace')





let currentDisplayValue = '';



digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (shouldResetDisplay) {
            currentDisplayValue = '';
            shouldResetDisplay = false;
        }

        const digit = button.textContent;

        if (currentDisplayValue === '0') {
            currentDisplayValue = digit;
        } else {
            currentDisplayValue += digit;
        }

        display.textContent = currentDisplayValue



    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentOperator !== null && !shouldResetDisplay) {
            evaulate();
        }

        firstNumber = currentDisplayValue;

        currentOperator = button.textContent;

        shouldResetDisplay = true;
    });
});

equalsButton.addEventListener('click', () => {
    if(currentOperator === null || shouldResetDisplay) return;
    if(firstNumber === '' || currentDisplayValue === '') return;

    evaluate();
})



function evaluate() {
    const secondNumber = currentDisplayValue;
    const a = parseFloat(firstNumber);
    const b = parseFloat(secondNumber);

    if (currentOperator === '/' && b === 0) {
        display.textContent = 'ERROR';
        resetCalculator();
        return;
    }

    const result = operate(currentOperator, a, b);

    display.textContent = Math.round(result * 1000) / 1000;
    currentDisplayValue = result.toString();
    firstNumber = currentDisplayValue;
    currentOperator = null;
    shouldResetDisplay = true;
}

clearButton.addEventListener('click', () => {
    resetCalculator();
    display.textContent = '0';
});

function resetCalculator() {
    firstNumber = '';
    currentOperator = null;
    currentDisplayValue = '';
    shouldResetDisplay = false;
}

decimalButton.addEventListener('click', () => {
    if (shouldResetDisplay){
        currentDisplayValue = '0'
        shouldResetDisplay = false;
    }

    if (currentDisplayValue.includes('.')) return;

    currentDisplayValue += '.'
    display.textContent = currentDisplayValue;

});

backspaceButton.addEventListener('click', () => {
    if (shouldResetDisplay) return;

    currentDisplayValue = currentDisplayValue.slice(0, -1);
    if(currentDisplayValue === '') {
        currentDisplayValue = '0';
    }

    display.textContent = currentDisplayValue;
})



window.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
        handleDigitInput(e.key)
    }
})

function handleDigitInput(digit) {
    if (shouldResetDisplay) {
        currentDisplayValue = '';
        shouldResetDisplay = false;
    }

    if (currentDisplayValue === '0') {
        currentDisplayValue = digit;
    } else {
        currentDisplayValue += digit;
    }

    display.textContent = currentDisplayValue;

}
