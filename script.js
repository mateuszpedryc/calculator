let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let resetCurrentValue = false;

const numberBtn = document.querySelectorAll('.btn-numbers');
const operatorBtn = document.querySelectorAll('.btn-operations');
const currentValue = document.getElementById('current-value');
const lastOperation = document.getElementById('last-operation');
const equalsBtn = document.getElementById('equals');

equalsBtn.addEventListener('click', calculate);

numberBtn.forEach((button) => button.addEventListener('click', () => appendNumber(button.textContent)));
operatorBtn.forEach((button) => button.addEventListener('click', () => appendOperator(button.textContent)));

function appendNumber (number) {
    if(currentValue.textContent === '0' || resetCurrentValue) {
        reset ();
    }
    currentValue.textContent += number;
}

function appendOperator (operator) {
    if (currentOperator !== null) calculate();

    currentOperator = operator;
    firstNumber = currentValue.textContent;

    lastOperation.textContent = `${firstNumber} ${currentOperator}`;
    
    resetCurrentValue = true;
}

function reset () {
    currentValue.textContent = '';
    resetCurrentValue = false;
}

function calculate () {
    secondNumber = currentValue.textContent;
    currentValue.textContent = operate(currentOperator, firstNumber, secondNumber);
    lastOperation.textContent = `${firstNumber} ${currentOperator} ${secondNumber}`;
    currentOperator = null;
}

function add (a, b) {
    return a + b;
}

function substract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case 'x':
            return multiply(a, b);
        case '\\':
            if (b === 0) {
                return null
            } else {
            return divide(a, b);
            }
    }
}