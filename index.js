// Counter App
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("counter-el");
let count = 0;
function incrementCount() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let total = count + " - ";
    saveEl.textContent += total;
    console.log(count);
    countEl.textContent = 0;
    count = 0;
}

//Mini Calculator
let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");
function add() {
    let result = num1 + num2;
    sumEl.textContent = "Sum: " + result;
}

function subtract() {
    let result = num1 - num2;
    sumEl.textContent = "Sum: " + result;
}

function divide() {
    let result = num1 / num2;
    sumEl.textContent = "Sum: " + result;
}

function multiply() {
    let result = num1 * num2;
    sumEl.textContent = "Sum: " + result;
}
