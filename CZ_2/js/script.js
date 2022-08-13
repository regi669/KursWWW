

const btn1 = document.querySelector('.btn1')

const btn2 = document.querySelector('.btn2')

function HandleClick () {
    console.log("Btn1 Was Clicked")
}

function HandleClick2 () {
    console.log("Btn2 Was Clicked")
}

btn1.addEventListener('click', HandleClick)
btn2.addEventListener('click', HandleClick2)