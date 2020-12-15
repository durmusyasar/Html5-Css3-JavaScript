const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)) success(input)
    else error(input, 'Incorrect e-mail address')
}

function checkRequired(inputs) {
    inputs.forEach(element => {
        if(element.value === '') error(element, `${element.id} is Reqired !`);
        else success(element);
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) error(`${input.id} must be at least ${min} characters!`);
    else if (input.value.length > max) error(`${input.id} must be at most ${max} characters!`);
    else success(input);
}

function checkPasswords(input1, input2) {
    if(input1.value !== input2.value) error(input2, 'passwords do not match');
}

function checkPhone(input) {
    var exp = /^\d{10}$/;
    if(!exp.test(input.value)) error(input, 'Phone number must be 10 characters!');
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, email, password, repassword, phone]);
    checkEmail(email);
    checkPhone(phone);
    checkLength(username, 7,15);
    checkLength(password, 7,12);
    checkPasswords(password, repassword);
});