let firstNameError = document.querySelector('.firstNameError');
let secondNameError = document.querySelector('.secondNameError');
let emailError = document.querySelector('.emailError');
let phoneError = document.querySelector('.phoneError');
let passError = document.querySelector('.passError');
let pass = document.querySelector('#pass');
let confirmPass = document.querySelector('#confirmPass');
let confirmPassError = document.querySelector('.confirmPassError');
let userInputs =  document.querySelectorAll('input');

userInputs.forEach(function(uInput) {
    uInput.addEventListener('input', () => {
        if (uInput.id == 'firstName') {
            if (uInput.validity.tooShort) {
                firstNameError.textContent = 'minimum 4 characters';
            } else if (uInput.validity.valueMissing) {
                firstNameError.textContent = 'First name required';
            } else if (uInput.validity.patternMismatch) {
                firstNameError.textContent = 'only alphabets allowed'
            } else {
                firstNameError.textContent = '';
            }
        }

        if (uInput.id == 'secondName') {
            if (uInput.validity.tooShort) {
                secondNameError.textContent = 'minimum 3 characters';
            } else if (uInput.validity.patternMismatch) {
                secondNameError.textContent = 'Name cannot contain special charaters'
            } else {
                secondNameError.textContent = '';
            }
        }

        if (uInput.id == 'email') {
            if (uInput.validity.valueMissing) {
                emailError.textContent = 'email required';
            } else if (uInput.validity.tooShort) {
                emailError.textContent = 'minimum 15 characters';
            } else if (uInput.validity.patternMismatch) {
                emailError.textContent = 'valid special characters: ._+- and must end with @gmail.com';
            } else {
                emailError.textContent = '';
            }
        }

        if (uInput.id == 'phone') {
            if (uInput.validity.patternMismatch) {
                phoneError.textContent = 'no numbers are allowed';
            } else if (uInput.value.length != 10) {
                if (uInput.value.length == 0) {
                    phoneError.textContent = '';
                } else {
                    phoneError.textContent = 'must be 10 digits';
                }
            } else {
                phoneError.textContent = '';
            }
        }

        if (uInput.id == 'pass') {
            if (uInput.validity.tooShort) {
                passError.textContent = 'must be at least 5 characters';
            } else {
                passError.textContent = '';
            }

            if (uInput.value == confirmPass.value) {
                confirmPassError.textContent = '';
            } else {
                confirmPassError.textContent = 'password does not match';
            }
        }

        if (uInput.id == 'confirmPass') {
            if (pass.value == uInput.value) {
                confirmPassError.textContent = '';
            } else {
                confirmPassError.textContent = 'password does not match';
            }
        }
    })
});