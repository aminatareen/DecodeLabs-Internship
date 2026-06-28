
const form = document.getElementById("signupForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");


const successMessage = document.getElementById("successMessage");

const strengthMessage = document.getElementById("strengthMessage");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirm = document.getElementById("toggleConfirm");

togglePassword.addEventListener("click", function () {

    if(passwordInput.type === "password"){

        passwordInput.type = "text";

        togglePassword.classList.remove("fa-eye");

        togglePassword.classList.add("fa-eye-slash");

    }
    else{
        passwordInput.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }
});
toggleConfirm.addEventListener("click", function(){
    if(confirmInput.type==="password"){
        confirmInput.type="text";
        toggleConfirm.classList.remove("fa-eye");
        toggleConfirm.classList.add("fa-eye-slash");
    }
    else{
        confirmInput.type="password";
        toggleConfirm.classList.remove("fa-eye-slash");
        toggleConfirm.classList.add("fa-eye");
    }
});
passwordInput.addEventListener("keyup", function(){
    const password = passwordInput.value;
    if(password.length < 8){
        strengthMessage.innerHTML="Weak Password";
        strengthMessage.style.color="red";
    }
    else if(password.match(/[A-Z]/)
        && password.match(/[0-9]/)
        && password.match(/[@$!%*?&]/)){
        strengthMessage.innerHTML="Strong Password";
        strengthMessage.style.color="green";
    }

    else{
        strengthMessage.innerHTML="Medium Password";
        strengthMessage.style.color="orange";
    }
});
form.addEventListener("submit", function(event){
    event.preventDefault();
    nameError.innerHTML="";
    emailError.innerHTML="";
    passwordError.innerHTML="";
    confirmError.innerHTML="";
    successMessage.innerHTML="";
    let valid = true;
    if(nameInput.value.trim()==""){
        nameError.innerHTML="Please enter your full name.";
        valid=false;
    }
    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailInput.value.trim()==""){
        emailError.innerHTML="Email is required.";
        valid=false;
    }
    else if(!emailPattern.test(emailInput.value)){
        emailError.innerHTML="Please enter a valid email.";
        valid=false;

    }
    const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if(passwordInput.value==""){
        passwordError.innerHTML="Password is required.";
        valid=false;
    }
    else if(!passwordPattern.test(passwordInput.value)){
        passwordError.innerHTML="Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character.";
        valid=false;
    }
    if(confirmInput.value==""){
        confirmError.innerHTML="Please confirm your password.";
        valid=false;
    }
    else if(passwordInput.value!=confirmInput.value){
        confirmError.innerHTML="Passwords do not match.";
        valid=false;
    }
    if(valid){
        successMessage.innerHTML="🎉 Account Created Successfully! Welcome to BlushBloom Beauty 💄";
        form.reset();
        strengthMessage.innerHTML="";
    }
});