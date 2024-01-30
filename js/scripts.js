(function() {
    let form = document.querySelector('.contact-me-form');
    let nameInput = document.querySelector('.user-name');
    let emailInput = document.querySelector('.user-email');
    let userMessage = document.querySelector('user-message');
  
    function showErrorMessage(input, message) {
      let container = input.parentElement; // The .input-wrapper
  
      // Check and Remove any existing errors
      let error = container.querySelector('.error-message');
      if (error) {
        container.removeChild(error);
      }
  
      // Now add the error if the message isn’t empty
      if (message) {
        let error = document.createElement('div');
        error.classList.add('error-message');
        error.innerText = message;
        container.appendChild(error);
      }
    }
    
    function validateEmail() {
      let value = emailInput.value;
  
      if (!value) {
        showErrorMessage(emailInput, 'Email is a required field.');
        return false;
      }
  
      if (value.indexOf('@') === -1) {
        showErrorMessage(emailInput, 'You must enter a valid email address.');
        return false;
      }
  
      if (value.indexOf('.') === -1) {
        showErrorMessage(emailInput, 'You must enter a valid email address.');
        return false;
      }
  
  
      showErrorMessage(emailInput, null);
      return true;
    }
    
    function validateName() {
      let value = nameInput.value;
  
      if (value.length === 0) {
        showErrorMessage(nameInput, 'Name is a required field.');
        return false;
      }
  
      showErrorMessage(passwordInput, null);
      return true;
    }

    function validateMessage() {
        let value = userMessage.value;

        if (!value) {
            showErrorMessage(userMessage, 'Message is a required field.');
            return false;
        }
        if (value.length > 500) {
            showErrorMessage(userMessage, 'Message must be 500 characters or less.');
            return false;
        }
        if (value.length === 0) {
            showErrorMessage(userMessage, 'Message is a required field.');
            return false;
        }
        
        showErrorMessage(userMessage, null);
        return true;
    }
    
    function validateForm() {
      let isValidEmail = validateEmail();
      let isValidName = validateName();
      let isValidMessage = validateMessage();
      return isValidEmail && isValidName && isValidMessage;
    }
    
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Do not submit to the server
      if (validateForm()) {
        alert('Success!');
      }
    })
  
    emailInput.addEventListener('input', validateEmail);
    nameInput.addEventListener('input', validateName);
    messageInput.addEventListener('input', validateMessage);
  
    // THE RETURN STATEMENT HERE
    return {
        validateEmail : validateEmail,
        validateName : validateName,
        validateMessage : validateMessage,
    }
  })();