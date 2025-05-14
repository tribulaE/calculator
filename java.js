//add , subtract, multiply and divide functions//
function add(a, b) {
    return a + b
}



function subtract(a, b) {
    return a - b
}



function multiply(a, b) {
    return a * b
}



function divide(a, b) {
    if(b === 0) return "Error" //Making sure its not possible to divide by zero//
    return a / b
}


//Calls the  math function based on operator//

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


//VARIABLES//

let firstNumber = '';
let currentOperator = null;
let shouldResetDisplay = false;
let currentDisplayValue = '';

//DOM ELEMENTS//

const display = document.getElementById('display')
const digitButtons = document.querySelectorAll('.digit')
const operatorButtons = document.querySelectorAll('.operator')
const equalsButton = document.getElementById('equal')
const clearButton = document.getElementById('clear')
const decimalButton = document.getElementById('decimal')
const backspaceButton = document.getElementById('backspace')




//BUTTONS ON CALC//

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


//OPERATOR BUTTONS//

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentOperator !== null && !shouldResetDisplay) {
            evaluate();
        }

        firstNumber = currentDisplayValue;

        currentOperator = button.textContent;

        shouldResetDisplay = true;
    });
});

//EQUAL BUTTON//

equalsButton.addEventListener('click', () => {
    if(currentOperator === null || shouldResetDisplay) return;
    if(firstNumber === '' || currentDisplayValue === '') return;

    evaluate();
})



//MAKING THE CALCULATION FOR THE FUNCTION EVALUTE//
function evaluate() {
    const secondNumber = currentDisplayValue;
    const a = parseFloat(firstNumber);
    const b = parseFloat(secondNumber);

    if (currentOperator === '/' && b === 0) {
        display.textContent = 'ERROR';
        resetCalculator();
        return;
    }
    //MATH OPERATION HERE//
    const result = operate(currentOperator, a, b);

    display.textContent = Math.round(result * 1000) / 1000; //ROUNDING TO 3 DECIMAL PLACES//
    currentDisplayValue = result.toString();
    firstNumber = currentDisplayValue;
    currentOperator = null;
    shouldResetDisplay = true;
}

//CLEAR FUNCTION FOR CLEAR BUTTON//

clearButton.addEventListener('click', () => {
    resetCalculator();
    display.textContent = '0';
});

//RESETING ALL NUMBERS ON THE DISPLAY//

function resetCalculator() {
    firstNumber = '';
    currentOperator = null;
    currentDisplayValue = '';
    shouldResetDisplay = false;
}


//DECIMAL INPUT//

decimalButton.addEventListener('click', () => {
    if (shouldResetDisplay){
        currentDisplayValue = '0'
        shouldResetDisplay = false;
    }

    if (currentDisplayValue.includes('.')) return;

    currentDisplayValue += '.'
    display.textContent = currentDisplayValue;

});


//BACKSPACE FUNCTION FOR BUTTON//

backspaceButton.addEventListener('click', () => {
    if (shouldResetDisplay) return;

    currentDisplayValue = currentDisplayValue.slice(0, -1);
    if(currentDisplayValue === '') {
        currentDisplayValue = '0';
    }

    display.textContent = currentDisplayValue;
})


//KEYBOARD SUPPORT, LETS USERS TYPE WITH ONLY THE NUMBER KEYS//

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
