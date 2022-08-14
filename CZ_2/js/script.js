const plusButton = document.querySelector('.size-up');
const minusButton = document.querySelector('.size-down');
const color = document.querySelector('.color');
const p = document.querySelector('p');

let fontsize = 20;

function bigText () {
    fontsize++;
    p.style.fontSize = fontsize +  'px'
}

function smallText () {
    fontsize--;
    p.style.fontSize = fontsize +  'px'
}

function changeColor () {
    p.style.color = p.style.color === 'gold' ? 'white' : 'gold';
}

plusButton.addEventListener('click', bigText)
minusButton.addEventListener('click', smallText)
color.addEventListener('click', changeColor)