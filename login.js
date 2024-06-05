document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Hardcoded credentials for testing
    var hardcodedUsername = 'testuser';
    var hardcodedPassword = 'password123';

    if (username === hardcodedUsername && password === hardcodedPassword) {
        sessionStorage.setItem('loggedIn', true);
        sessionStorage.setItem('username', username);
        window.location.href = 'index.html'; // Redirect to index.html after successful login
    } else {
        alert('Invalid username or password');
    }
});