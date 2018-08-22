const num1 = document.getElementById('num1');
console.log(num1);
const backspaceButton = document.getElementById('backspaceButton')
backspaceButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = '0';
    } else {
        input.value = input.value.slice(0, -1);
    }
};

const input = document.getElementById('num-input');
num1.onclick = () => {
    enterNamber(1)
};
const num2 = document.getElementById('num2');
num2.onclick = () => {
    enterNamber(2)
};
const num3 = document.getElementById('num3');
num3.onclick = () => {
    enterNamber(3)
};
const num4 = document.getElementById('num4');
num4.onclick = () => {
    enterNamber(4)
};
const num5 = document.getElementById('num5');
num5.onclick = () => {
    enterNamber(5)
};
const num6 = document.getElementById('num6');
num6.onclick = () => {
    enterNamber(6)
};
const num7 = document.getElementById('num7');
num7.onclick = () => {
    enterNamber(7)
};
const num8 = document.getElementById('num8');
num8.onclick = () => {
    enterNamber(8)
};
const num9 = document.getElementById('num9');
num9.onclick = () => {
    enterNamber(9)
};
const num0 = document.getElementById('num0');
num0.onclick = () => {
    enterNamber(0)
};
const numg = document.getElementById('numg');
numg.onclick = () => {
    enterNamber('+')
};
const numn = document.getElementById('numn');
numn.onclick = () => {
    enterNamber('-')
};
const numh = document.getElementById('numh');
numh.onclick = () => {
    enterNamber('*')
};const numj = document.getElementById('numj');
numj.onclick = () => {
    enterNamber('.')
};
const numk = document.getElementById('numk');
numk.onclick = () => {
    enterNamber('/')
};
enterNamber = (n) => {
    if (input.value === '0') {
        input.value = n;
    } else {
        input.value = input.value + n;
    }
}

const numButtons = document.getElementsByClassName('num-button')
for (let i = 0; i < numButtons.lenght; i++) {
    const button = numButtons[i];
    const num = button.textContent;
    button.onclick =() =>
    { enterNamber(num)}
}

// DOM - Document Object Model
// BOM - Browser Object Model