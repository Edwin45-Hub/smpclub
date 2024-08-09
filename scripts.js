// scripts.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'member' && password === 'member') {
        window.location.href = 'booking.html'; // Redirect to booking page on successful login
    } else {
        document.getElementById('message').textContent = 'Invalid username or password';
    }
});
