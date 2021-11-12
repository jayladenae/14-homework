const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#user_name').value.trim();
    
    const password = document.querySelector('#password').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ user_name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the appointments page
        document.location.replace('/home');
      } else {
        alert('Failed to log in');
      }
    }
  };

  // Event Listeners on the login handlebars 
  document
    .querySelector('#loginForm')
    .addEventListener('submit', loginFormHandler);

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