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
const input = document.getElementById('num-input');

const numg = document.getElementById('numg');
numg.onclick = () => {
    enterNamber('+')
};
const numh = document.getElementById('numh');
numh.onclick = () => {
    enterNamber('*')
};
const numn = document.getElementById('numn');
numn.onclick = () => {
    enterNamber('-')
};
const numj = document.getElementById('numj');
numj.onclick = () => {
    enterNamber('.')
};
const numk = document.getElementById('numk');
numk.onclick = () => {
    enterNamber('/')
};
enterNamber = (n) => {
    if (n == '+') {
        if (num == null) {
            op = '+'
            console.log('+')
        }
        return
    }
    if (input.value === '0') {
        input.value = n;
    } else {
        input.value = input.value + n;
    }
};
const numButtons = document.getElementsByClassName('nam-baton');
for (let i = 0; i < numButtons.length; i++) {
    const button = numButtons[i];
    const num = button.textContent;
    button.onclick = () => {
        enterNamber(num)
    }
}
const dotButton = numj
dotButton.onclick = () => {enterNamber('+')}
// DOM - Document Object Model
// BOM - Browser Object Model
const dotbaton = document.getElementById('nam-baton');
d