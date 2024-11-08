let login = document.getElementById('login');
let password = document.getElementById('password');
let email = document.getElementById('email');
let loginButton = document.getElementById('login-button');

let loginError = document.getElementById('login-error');
let passwordError = document.getElementById('password-error');
let emailError = document.getElementById('email-error');

let loginCheck = false;
let passwordCheck = false;
let emailCheck = false;

const loginRegex = /^[a-z][a-zA-Z]{8,}$/;
const passwordRegex = /^[A-Z][A-Za-z0-9]{7,}[0-9]$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

login.addEventListener('input', (ev) => {
    loginCheck = loginRegex.test(ev.target.value);
    if (loginCheck) {
        loginError.style.display = 'none';
    } else {
        loginError.style.display = 'block';
    }
    checkButton();
});

password.addEventListener('input', (ev) => {
    passwordCheck = passwordRegex.test(ev.target.value);
    if (passwordCheck) {
        passwordError.style.display = 'none';
    } else {
        passwordError.style.display = 'block';
    }
    checkButton();
});

email.addEventListener('input', (ev) => {
    emailCheck = emailRegex.test(ev.target.value);
    if (emailCheck) {
        emailError.style.display = 'none';
    } else {
        emailError.style.display = 'block';
    }
    checkButton();
});

function checkButton() {
    if (loginCheck && passwordCheck && emailCheck) {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
}

loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (checkButton()) {
        console.log(login.value, password.value, email.value);
    } 
});
