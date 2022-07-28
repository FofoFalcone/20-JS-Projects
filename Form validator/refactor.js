const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordconf = document.getElementById('password-confirm');


// SHOW ERROR MESSAGE FUNCTION
function showError(input, message) {
  const formControl = input.parentElement;
  console.log(formControl);
  formControl.className = 'form-control error';
  const errorMessage = formControl.querySelector('.form-control-message');
  errorMessage.innerText = message;
}

// SHOW SUCCESS OUTLINE
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// GET FIELD NAME
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// CHECK VALID EMAIL INPUT
function checkEmail(input) {
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
  return re.test(String(input).toLowerCase());
}

// CHECK PASSWORDS MATCH
function checkPasswordsMatch (input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords don\'t match');
  } 
}

// CHECK REQUIRED FIELDS
function checkRequired(inputs) {
  inputs.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input)
    }
  })
}

// CHECK INPUT VALUE LENGTH
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must contain at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must contain less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// FORM SUBMIT EVENT LISTENER
form.addEventListener('submit', function(e) {
  e.preventDefault();
  checkRequired([username, email, password, passwordconf]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, passwordconf);
});