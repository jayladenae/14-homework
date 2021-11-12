const signUpBtn = document.querySelector('#signUpBtn');
const signInBtn =  document.querySelector('#signInBtn');

 signInBtn.addEventListener('click', function() {
    document.getElementById('loginForm').style.display = "block";
    document.getElementById('signUpForm').style.display = "none";
    signInBtn.style.display = "none";
});

signUpBtn.addEventListener('click', function() {
    document.getElementById('signUpForm').style.display = "block";
    document.getElementById('loginForm').style.display = "none";
    signUpBtn.style.display = "none";
    console.log('sign-up ran')
});