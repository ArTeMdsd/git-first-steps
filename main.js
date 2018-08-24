const num1 = document.getElementById('num1');
console.log(num1);
const backspaceButton = document.getElementById('backspaceButton');
backspaceButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = '0';
    } else {
        input.value = input.value.slice(0, -1);
    }
};
let num = null
let op = null
let p = false
let lop = null
const input = document.getElementById('num-input');

const numg = document.getElementById('numg');
numg.onclick = () => {
    dispatchOperation('+')
};
const numh = document.getElementById('numh');
numh.onclick = () => {
    dispatchOperation('*')
};
const numn = document.getElementById('numn');
numn.onclick = () => {
    dispatchOperation('-')
};
const numj = document.getElementById('numj');
numj.onclick = () => {
    enterNamber('.')
};
const numk = document.getElementById('numk');
numk.onclick = () => {
    dispatchOperation('/')
};
const numButtons = document.getElementsByClassName('nam-baton');
for (let i = 0; i < numButtons.length; i++) {
    const button = numButtons[i];
    const num = button.textContent;
    button.onclick = () => {
        enterNamber(num)
    }
}

const enterNamber = (n) => {
    if (input.value === '0') {
        input.value = n;
    } else {
        if (p) {
            num = parseFloat(input.value);
            input.value = n;
            p = false
        } else {
            input.value = input.value + n;
        }
    }
};
const dispatchOperation = (operation) => {
    if (lop) {
        if (!p){
        num = processOperation(lop, num, parseFloat(input.value));
        input.value = num;
        }
    }

    p = true;
    lop = operation;
};
const processOperation = (operation, argument1, argument2) => {
    switch (operation) {
        case'+':
            return argument1 + argument2;
        case '-':
            return argument1 - argument2;
        case '*':
            return argument1 * argument2;
        case '/':
            return argument1 / argument2;
    }
};v

// DOM - Document Object Model
// BOM - Browser Object Model















