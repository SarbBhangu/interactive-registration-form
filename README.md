## Interactive User Registration Form
- In this lab, I will build an interactive user registration form. I will apply my knowledge of DOM manipulation, event handling, HTML5 and JavaScript form validation, and localStorage

# Objectives
1. Structure an HTML form with appropriate input fields for registration.
2. Implement real-time input validation using JavaScript event listeners (input event).
3. Use HTML5 validation attributes (e.g., required, type, minlength, pattern).
4. Apply the JavaScript Constraint Validation API to check validity and display custom error messages
5. Dynamically create and display error messages next to input fields.
6. Handle the form submit event, prevent default submission, and perform final validation.
7. Use localStorage to save and retrieve simple form data (e.g., username)

# Files
- index.html
- styles.css
- script.js

# Reflection 
1. How did event.preventDefault() help in handling form submission?
- It stopped the page from reloading so i could check the form with Javascript first.

2. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
- HTML5 validation checks all fields automatically without custom messages. JavaScript validation lets me show my own error messages. I used both to make the form more user-friendly.

3. Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
- I saved the username in localStorage and loaded it later. It’s not secure for sensitive data.

4. Describe a challenge you faced in implementing the real-time validation and how you solved it.
- Getting the error messages to update while typing was tricky. I fixed it by using input event listeners for each field.

5. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
- i showed short messages under each field using textContent and cleared them when valid. They update while typing and on submit.