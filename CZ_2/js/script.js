const imgButton = document.querySelector('.arrow')
const imgToChangeSize = document.querySelector('.item1')

function onClick () {
    if (imgToChangeSize.classList.contains('show')) {
        imgToChangeSize.classList.remove('show');
        imgButton.classList.remove('animate');
    } else {
        imgToChangeSize.classList.add('show');
        imgButton.classList.add('animate');
    }
}

imgButton.addEventListener('click', onClick)