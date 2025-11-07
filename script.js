const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

document.addEventListener('DOMContentLoaded' , ()=> {
    const savedUsername = localStorage.getItem('username');

    if (savedUsername) {
        username.value = savedUsername;
        console.log("Username loaded from localStorage:", savedUsername)
    } else {
        console.log("No username found in localStorage yet.");
    }
})


function validateUsername() {
    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required";
        return false;
    }
    if (username.value.length < 3) {
        usernameError.textContent = "Need at least 3 charaters";
        return false;
    }
        usernameError.textContent = "";
        return true;
}


function validateEmail() {
    if (email.value.trim() === "") {
        emailError.textContent = "Email required.";
        return false;
  }
    if (!email.checkValidity()) {
        emailError.textContent = "Please enter a valid email.";
        return false;
  }
        emailError.textContent = "";
        return true;
}


function validatePassword() {
  const value = password.value;
  const hasUpper = /[A-Z]/.test(value);
  const hasLower = /[a-z]/.test(value);
  const hasNumber = /\d/.test(value);

    if (value === "") {
        passwordError.textContent = "Password required.";
        return false;
  }
    if (value.length < 8) {
        passwordError.textContent = "Need at least 8 characters.";
        return false;
  }
    if (!hasUpper || !hasLower || !hasNumber) {
        passwordError.textContent = "Add upper, lower, and a number.";
        return false;
  }
        passwordError.textContent = "";
        return true;
}
function validateConfirm() {
    if (confirmPassword.value === "") {
        confirmPasswordError.textContent = "Please confirm your password.";
        return false;
  }
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
  }
        confirmPasswordError.textContent = "";
        return true;
}




username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", () => {
  validatePassword();
  validateConfirm();
});
confirmPassword.addEventListener("input", validateConfirm);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const checkUser = validateUsername();
  const checkEmail = validateEmail();
  const checkPass = validatePassword();
  const checkConfirm = validateConfirm()

  if (!checkUser || !checkEmail || !checkPass || !checkConfirm) {
        if (!checkUser) username.focus()
        else if (!checkEmail) email.focus();
        else if (!checkPass) password.focus()
        else confirmPassword.focus();
        return;
    }
localStorage.setItem("username", username.value);
alert("Username saved.");
form.reset();

usernameError.textContent = "";
emailError.textContent = "";
passwordError.textContent = "";
confirmPasswordError.textContent = "";
})

  