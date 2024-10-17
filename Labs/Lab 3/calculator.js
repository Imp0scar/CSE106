// Variables to store calculator state
let currentInput = '';
let currentOperator = '';
let firstNumber = '';
let secondNumber = '';
let result = '';
let operatorClicked = false;
let lastOperator = '';

// Function to update the display
function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

// Function to append a character to the current input
function appendToDisplay(char) {
    if (operatorClicked || result !== '') {
        currentInput = char;
        operatorClicked = false;
        result = '';
    } else {
        currentInput += char;
    }
    updateDisplay();
}

// Function to append a decimal point
function appendDecimal() {
    if (!currentInput.includes('.') && !operatorClicked) {
        currentInput += '.';
        updateDisplay();
    }
}

// Function to handle operator buttons
function appendOperator(operator) {
    if (currentInput !== '') {
        if (currentOperator !== '') {
            calculateResult();
        }
        firstNumber = currentInput;
        currentOperator = operator;
        operatorClicked = true;
    }
}

// Function to calculate the result
function calculateResult() {
    if (currentOperator !== '') {
        secondNumber = currentInput;
        switch (currentOperator) {
            case '+':
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case '-':
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case '*':
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case '/':
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
        }
        lastOperator = currentOperator; // Store the last operator used
        currentInput = result.toString();
        currentOperator = '';
        operatorClicked = false;
        updateDisplay();
    }
}

// Function to handle repeated equals button presses
function handleRepeatedEquals() {
    if (lastOperator !== '' && firstNumber !== '') {
        currentOperator = lastOperator;
        currentInput = firstNumber;
        calculateResult();
    }
}

// Function to clear the display and reset calculator state
function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    firstNumber = '';
    secondNumber = '';
    result = '';
    operatorClicked = false;
    lastOperator = '';
    updateDisplay();
}

// Function to delete the last character
function deleteLastCharacter() {
    if (currentInput !== '') {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    }
}
