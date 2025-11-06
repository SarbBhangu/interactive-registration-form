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
        usernameError.textContent = "At least 3 charaters";
        return false;
    }
}