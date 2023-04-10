window.onload = function() {
    let formulario = document.querySelector('.form-group');
    let inputName = document.querySelector('#inputEditName');
    let inputPrice = document.querySelector('#inputEditPrice');
    let inputDiscount = document.querySelector('#inputEditDiscount');
    let inputDescription = document.querySelector('#inputEditDescription');

    inputName.focus();

    inputName.addEventListener('blur', (e) => {
        if (e.target.value == '') {
            inputName.classList.add('is-invalid');
        } else {
            inputName.classList.remove('is-invalid');
            inputName.classList.add('is-valid');
        }
    })

    inputPrice.addEventListener('blur', (e) => {
        if (e.target.value == '') {
            inputPrice.classList.add('is-invalid');
        } else {
            inputPrice.classList.remove('is-invalid');
            inputPrice.classList.add('is-valid');
        }
    })

    inputDiscount.addEventListener('blur', (e) => {
        if (e.target.value == '') {
            inputDiscount.classList.add('is-invalid');
        } else {
            inputDiscount.classList.remove('is-invalid');
            inputDiscount.classList.add('is-valid');
        }
    })

    inputDescription.addEventListener('blur', (e) => {
        if (e.target.value == '') {
            inputDescription.classList.add('is-invalid');
        } else {
            inputDescription.classList.remove('is-invalid');
            inputDescription.classList.add('is-valid');
        }
    })

    formulario.addEventListener('submit', (e) => {
        let errors = [];

        if (inputName.value == '') {
            errors.push('Debe completar el campo de Nombre del producto');
            inputName.classList.add('is-invalid');
        } else {
            inputName.classList.remove('is-valid');
        };

        if (inputPrice.value == '') {
            errors.push('Debe completar el campo de Precio');
            inputPrice.classList.add('is-invalid');
        } else {
            inputPrice.classList.remove('is-valid');
        };

        if (inputDiscount.value == '') {
            errors.push('Debe completar el campo de Descuento');
            inputDiscount.classList.add('is-invalid');
        } else {
            inputDiscount.classList.remove('is-valid');
        };

        if (inputDescription.value == '') {
            errors.push('Debe completar el campo de Descripción');
            inputDescription.classList.add('is-invalid');
        } else {
            inputDescription.classList.remove('is-valid');
        };

        if (errors.length > 0) {
            e.preventDefault();
            
            let ulErrors = document.querySelector('#errorsEditProduct');
            ulErrors.classList.add('alert-warning');
            ulErrors.innerHTML = '';
            
            console.log(errors);

            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += '<li>' + errors[i] + '</li>';
                }
            } else {
            Swal.fire(
                'Producto editado correctamente'
            )
        }
    })
}