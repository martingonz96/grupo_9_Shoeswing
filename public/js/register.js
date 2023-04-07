window.onload  = function() {
    let formulario = document.querySelector('.registerForm');
    let inputFirstName = document.querySelector('#first_name');
    let inputLastName = document.querySelector('#last_name');
    let inputEmail = document.querySelector('#inputRegisterEmail');
    let inputPassword = document.querySelector('#inputRegisterPassword');
    let inputConfirmPassword = document.querySelector('#inputRegisterConfirmPassword');

    inputFirstName.focus();

    inputFirstName.addEventListener('blur', (e) => {
        if (inputFirstName.value == '') {
            inputFirstName.classList.add('is-invalid');
        } else {
            inputFirstName.classList.remove('is-invalid');
            inputFirstName.classList.add('is-valid');
        }
    })

    inputLastName.addEventListener('blur', (e) => {
        if (inputLastName.value == '') { 
            inputLastName.classList.add('is-invalid');
        } else {
            inputLastName.classList.remove('is-invalid');
            inputLastName.classList.add('is-valid');
        }
    })

    inputEmail.addEventListener('blur', (e) => {
        if (inputEmail.value == '') {
            inputEmail.classList.add('is-invalid');
        } else {
            inputEmail.classList.remove('is-invalid');
            inputEmail.classList.add('is-valid');
        }
    })

    inputPassword.addEventListener('blur', (e) => {
        if (inputPassword.value.length < 6) {
            inputPassword.classList.add('is-invalid');
        } else {
            inputPassword.classList.remove('is-invalid');
            inputPassword.classList.add('is-valid');
        }
    })

    inputConfirmPassword.addEventListener('blur', (e) => {
        if (inputConfirmPassword.value != inputPassword.value) {
            inputConfirmPassword.classList.add('is-invalid');
        } else {
            inputConfirmPassword.classList.remove('is-invalid');
            inputConfirmPassword.classList.add('is-valid');
        }
    })

    console.log('el codigo se ejecuto hasta aca');
    
    formulario.addEventListener('submit', (e) => {
        let errors = [];

        if (inputFirstName.value == '') {
            errors.push('Debe introducir un nombre')
            inputFirstName.classList.add('is-invalid');
        } else {
            inputFirstName.classList.remove('is-invalid');
        };
        
        if (inputLastName.value == '') {
            errors.push('Debe introducir un apellido')
            inputLastName.classList.add('is-invalid');
        } else {
            inputLastName.classList.remove('is-invalid');
        };

        if (inputEmail.value == '') {
            errors.push('Debe introducir un email')
            inputEmail.classList.add('is-invalid');
        } else {
            inputEmail.classList.remove('is-invalid');
        };

        if (inputPassword.value.length < 6) {
            errors.push('La contraseña debe tener 6 caracteres o más')
            inputPassword.classList.add('is-invalid');
        } else {
            inputPassword.classList.remove('is-invalid');
        };

        if (errors.length > 0) {
            e.preventDefault();

            let ulErrors = document.querySelector('#errorsRegister');
            ulErrors.classList.add('alert-warning');
            ulErrors.innerHTML = '';

            console.log(errors);
            
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += '<li>' + errors[i] + '</li>';
            }
        } else {
            Swal.fire(
                'Usuario creado correctamente'
            )
        }
    })
}
