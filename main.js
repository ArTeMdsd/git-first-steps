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