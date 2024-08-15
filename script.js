// script.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let firstValue = '';
    let secondValue = '';
    let result = '';

    const updateDisplay = (value) => {
        display.textContent = value;
    };

    const handleNumber = (num) => {
        currentInput += num;
        updateDisplay(currentInput);
    };

    const handleOperator = (op) => {
        if (currentInput === '' && op !== 'C') return;
        if (op === 'C') {
            currentInput = '';
            firstValue = '';
            secondValue = '';
            operator = '';
            result = '';
            updateDisplay('0');
        } else if (op === '=') {
            secondValue = currentInput;
            currentInput = '';
            if (firstValue !== '' && secondValue !== '' && operator !== '') {
                switch (operator) {
                    case '+':
                        result = parseFloat(firstValue) + parseFloat(secondValue);
                        break;
                    case '-':
                        result = parseFloat(firstValue) - parseFloat(secondValue);
                        break;
                    case '*':
                        result = parseFloat(firstValue) * parseFloat(secondValue);
                        break;
                    case '/':
                        result = parseFloat(firstValue) / parseFloat(secondValue);
                        break;
                }
                updateDisplay(result);
                firstValue = result;
                secondValue = '';
                operator = '';
            }
        } else {
            firstValue = currentInput;
            operator = op;
            currentInput = '';
        }
    };

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.textContent;
            if (value >= '0' && value <= '9' || value === '.') {
                handleNumber(value);
            } else {
                handleOperator(value);
            }
        });
    });
});