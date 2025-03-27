const form = document.getElementById('registro-form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const nombreError = document.getElementById('nombre-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');
const successMessage = document.getElementById('success-message');

function validateNombre() {
    if (nombre.value.trim() === '') {
        nombreError.textContent = 'El nombre es obligatorio.';
        return false;
    } else {
        nombreError.textContent = '';
        return true;
    }
}


function validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = 'El correo electrónico no es válido.';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}


function validatePassword() {
    if (password.value.length < 6) {
        passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        return false;
    } else {
        passwordError.textContent = '';
        return true;
    }
}


function validateConfirmPassword() {
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = 'Las contraseñas no coinciden.';
        return false;
    } else {
        confirmPasswordError.textContent = '';
        return true;
    }
}


nombre.addEventListener('input', validateNombre);
email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);
confirmPassword.addEventListener('input', validateConfirmPassword);


function validateForm(event) {
    event.preventDefault(); 

    const isNombreValid = validateNombre();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isNombreValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        
        successMessage.style.display = 'block';
        form.reset(); 
        
    } else {
        
        successMessage.style.display = 'none';
    }
}

form.addEventListener('submit', validateForm);
