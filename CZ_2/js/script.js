

const red = document.querySelector('#btn1');
const blue = document.querySelector('.btn2');
const revertColor = document.querySelector('.remove-color');
const colorDiv = document.querySelector('.color');

function colorRed () {
    colorDiv.classList.toggle('red')
}

function colorBlue () {
    colorDiv.classList.add('blue');
    colorDiv.classList.remove('red');
}

function revertColorF () {
    colorDiv.classList.remove('red');
    colorDiv.classList.remove('blue');
}

red.addEventListener('click', colorRed)
blue.addEventListener('click', colorBlue)
revertColor.addEventListener('click', revertColorF)