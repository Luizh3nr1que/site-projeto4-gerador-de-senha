let sliderElement = document.getElementById('slider');
let buttonElemnt = document.getElementById('button');

let sizePassword = document.getElementById('valor');

let password = document.getElementById('password');

let containerPassword = document.getElementById('container-password');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value
}

function generetePassword() {
    let pass = "";

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));

    }
    containerPassword.classList.remove("hide")
    password.innerHTML = pass;
    novasenha = pass;
}

