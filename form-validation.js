// Validate Login Form
function validateLoginForm() {
    let isValid = true;
    
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    // Reset error messages
    document.getElementById('email-error').innerText = '';
    document.getElementById('password-error').innerText = '';
    
    // Email Validation
    if (!email.value || !validateEmail(email.value)) {
      document.getElementById('email-error').innerText = 'Please enter a valid email address.';
      isValid = false;
    }
    
    // Password Validation
    if (!password.value) {
      document.getElementById('password-error').innerText = 'Password is required.';
      isValid = false;
    }
  
    return isValid;
  }
  
  // Validate Register Form
  function validateRegisterForm() {
    let isValid = true;
  
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    
    // Reset error messages
    document.getElementById('name-error').innerText = '';
    document.getElementById('email-error').innerText = '';
    document.getElementById('password-error').innerText = '';
    document.getElementById('confirm-password-error').innerText = '';
    
    // Name Validation
    if (!name.value) {
      document.getElementById('name-error').innerText = 'Full name is required.';
      isValid = false;
    }
    
    // Email Validation
    if (!email.value || !validateEmail(email.value)) {
      document.getElementById('email-error').innerText = 'Please enter a valid email address.';
      isValid = false;
    }
    
    // Password Validation
    if (!password.value) {
      document.getElementById('password-error').innerText = 'Password is required.';
      isValid = false;
    }
  
    // Confirm Password Validation
    if (password.value !== confirmPassword.value) {
      document.getElementById('confirm-password-error').innerText = 'Passwords do not match.';
      isValid = false;
    }
  
    return isValid;
  }
  
  // Validate Email Format
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
  