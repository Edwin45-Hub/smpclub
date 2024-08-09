document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Hardcoded credentials
    const validUsername = 'member';
    const validPassword = 'member';
    
    // Check if the entered credentials match the hardcoded ones
    if (username === validUsername && password === validPassword) {
        // Redirect to the booking page or another protected page
        window.location.href = 'booking.html'; // Redirect to booking page
    } else {
        // Display an error message
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
    }
});
