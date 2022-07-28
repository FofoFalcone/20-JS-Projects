const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordconf = document.getElementById('password-confirm');


// SHOW ERROR MESSAGE FUNCTION
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const errorMessage = formControl.querySelector('.form-control-message');
  errorMessage.innerText = message;
}

// SHOW SUCCESS OUTLINE
function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// CHECK VALID EMAIL INPUT
function isValidEmail(email) {
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}

// FORM SUBMIT EVENT LISTENER
form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (username.value === '') {
    showError(username, 'Please enter a username');
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, 'Please enter an email');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Please enter a password');
  } else {
    showSuccess(password);
  }

  if (passwordconf.value === '') {
    showError(passwordconf, 'Password confirmation not valid');
  } else {
    showSuccess(passwordconf);
  }
});