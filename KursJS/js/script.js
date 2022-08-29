document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector('.item1')
    const btn  = document.querySelector('.arrow')
    const arrowIcon = document.querySelector('.fas')
    function onClick() {
        img.classList.toggle('show')
        if (img.classList.contains('show')) {
            arrowIcon.style.transform = "rotate(180deg)"
        } else {
            arrowIcon.style.transform = "rotate(0)"
        }
    }

    btn.addEventListener('click', onClick)
})