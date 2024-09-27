const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const persent = document.querySelector('.persent')
const comma = document.querySelector('.comma');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.textContent;
        if (!isFirstValue) {
            getFirstValue(atr);
        } else if (!isSecondValue) {
            getSecondValue(atr);
        }
    })
}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el) {
    if (firstValue !== "" && sign !== "") {
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign() {
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.textContent;
            isFirstValue = true;
        })
    }
}
getSign();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if (sign === "+") {
        resultValue = firstValue + secondValue;
    } else if (sign === "-") {
        resultValue = firstValue - secondValue;
    } else if (sign === "x") {
        resultValue = firstValue * secondValue;
    } else if (sign === "/") {
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
})

function checkResultLength(){
    resultValue = JSON.stringify(resultValue);

    if(resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != "") {
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resultValue = -resultValue;
    }
    result.innerHTML = resultValue;
})

persent.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != "") {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resultValue = resultValue / 100;
    }
    result.innerHTML = resultValue;
})

clear.addEventListener('click', () => {
   result.innerHTML = '0'; // Utilisation de '0' au lieu de O
    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;
})

comma.addEventListener('click', () => {
    if (!isFirstValue && !firstValue.toString().includes('.')) {
        firstValue += '.';
        result.innerHTML = firstValue;
    } else if (isFirstValue && !isSecondValue && !secondValue.toString().includes('.')) {
        secondValue += '.';
        result.innerHTML = secondValue;
    }
})
