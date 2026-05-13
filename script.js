const currentEl = document.getElementById('current');
const historyEl = document.getElementById('history');

let currentVal = '0';
let historyVal = '';

function updateDisplay() {
    currentEl.textContent = currentVal;
    historyEl.textContent = historyVal;
}

function appendNumber(num) {
    if (currentVal === '0' && num !== '.') {
        currentVal = num;
    } else {
        if (num === '.' && currentVal.includes('.')) return;
        currentVal += num;
    }
    updateDisplay();
}

function appendOperator(op) {
    historyVal = currentVal + ' ' + op;
    currentVal = '0';
    updateDisplay();
}

function clearDisplay() {
    currentVal = '0';
    historyVal = '';
    updateDisplay();
}

function deleteLast() {
    currentVal = currentVal.toString().slice(0, -1);
    if (currentVal === '') currentVal = '0';
    updateDisplay();
}

function calculate() {
    try {
        let expression = historyVal.replace('×', '*') + ' ' + currentVal;
        let result = eval(expression);
        historyVal = expression + ' =';
        currentVal = result.toString();
        updateDisplay();
    } catch (e) {
        currentVal = 'Error';
        updateDisplay();
    }
}
