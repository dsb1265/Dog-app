document.addEventListener("DOMContentLoaded", function() {
    var accountForm = document.getElementById('accountForm');
    if (accountForm) {
        accountForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            var username = document.getElementById('username').value;
            var city = document.getElementById('city').value;
            var postalCode = document.getElementById('postalCode').value;

            // Save account information in session storage
            var account = {
                username: username,
                city: city,
                postalCode: postalCode
            };
            sessionStorage.setItem('account', JSON.stringify(account));
            sessionStorage.setItem('loggedIn', 'true');

            // Redirect to index.html after account creation
            window.location.href = 'index.html';
        });
    }
});