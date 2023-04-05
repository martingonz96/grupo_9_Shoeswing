window.onload = function() {
    let formulario = document.querySelector('.formulario');
    let inputEmail = document.querySelector('#email');
    let inputPassword = document.querySelector('#password');

    inputEmail.focus();

    inputEmail.addEventListener('blur', (e) => {
        if (inputEmail.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debe ingresar un email'
              })
        } else {
            inputEmail.classList.add('is-valid');
        }
    })

    inputPassword.addEventListener('blur', (e) => {
        if (inputPassword.value < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La contraseña debe tener al menos 6 caracteres'
              })
        } else {
            inputPassword.classList.add('is-valid');
        }
    })
}