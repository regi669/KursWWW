document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav')
    console.log(nav)

    function addShadow() {
        if (window.scrollY >= 100 || window.innerWidth <= 400) {
            nav.classList.add('shadow-bg');
        } else {
            nav.classList.remove('shadow-bg')
        }
    }
    addShadow()
    window.addEventListener('scroll', addShadow)

    const navbarMobile = document.querySelector('#navbarNavAltMarkup')
    const navLinks = document.querySelectorAll('.nav-link')
    const icon = document.querySelector('.fa-bars')
    const toggler = document.querySelector('.navbar-toggler')
    console.log(icon)

    navLinks.forEach(navLink => navLink.addEventListener('click', () => {
            if (navbarMobile.classList.contains('show')) {
                navbarMobile.classList.remove('show');
                icon.classList.add('fa-bars')
                icon.classList.remove('fa-caret-down')
            } else {

            }
        })
    )

    toggler.addEventListener('click', function () {
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars')
            icon.classList.add('fa-caret-down')
        } else {
            icon.classList.add('fa-bars')
            icon.classList.remove('fa-caret-down')
        }
    })
});