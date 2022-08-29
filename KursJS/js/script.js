document.addEventListener("DOMContentLoaded", () => {
    const passInput = document.querySelector('#password');
    const passInfo = document.querySelector('.passinfo');
    const letters = /[a-z]/i;
    const numbers = /[0-9]/;
    const special = /[!@#$%^&*()]/;
    const minValue = 10;


    function onInput() {
        if (passInput.value.length < 1) {
            passInfo.textContent = "Nie podałeś hasła..."
            passInfo.style.color = "grey"
            return
        }
        if (passInput.value.length < minValue) {
            passInfo.textContent = "Słabe Hasło"
            passInfo.style.color = "tomato"
            return
        }
        if (passInput.value.match(letters) && passInput.value.match(numbers)) {
            if (passInput.value.match(special)) {
                passInfo.textContent = "Bardzo Dobre Hasło"
                passInfo.style.color = "lime"
                return
            }
            passInfo.textContent = "Dobre Hasło"
            passInfo.style.color = "limegreen"
        }
    }

    passInput.addEventListener('input', onInput)
})