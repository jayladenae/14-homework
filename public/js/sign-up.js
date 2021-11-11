const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const user_name = document.querySelector('#user_name').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (user_name && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ user_name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/home');
      } else {
        alert(response.statusText);
      }
    }
  };
  

  document
    .querySelector('#signUpForm')
    .addEventListener('submit', signupFormHandler);