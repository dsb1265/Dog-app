document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            // Hard-coded credentials for testing
            var hardcodedUsername = "testuser";
            var hardcodedPassword = "password123";

            // Check credentials
            if (username === hardcodedUsername && password === hardcodedPassword) {
                sessionStorage.setItem('loggedIn', 'true');
                window.location.href = 'index.html';
            } else {
                alert("Invalid username or password!");
            }
        });
    }
});