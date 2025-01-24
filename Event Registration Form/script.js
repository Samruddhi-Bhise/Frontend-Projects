document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    // Perform form validation
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    
    if (!name || !email) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Show confirmation popup
    document.getElementById('confirmationPopup').style.display = 'flex';
  });
  
  document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('confirmationPopup').style.display = 'none';
  });
  
  // Dynamically update pricing based on event selection
  document.getElementById('event').addEventListener('change', function() {
    let eventType = this.value;
    let priceElement = document.getElementById('price');
    
    if (eventType === 'workshop') {
      priceElement.textContent = 'Rs.3000';
    } else if (eventType === 'seminar') {
      priceElement.textContent = 'Rs.2500';
    } else if (eventType === 'webinar') {
      priceElement.textContent = 'Rs.1000';
    }
  });
  
