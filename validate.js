document.addEventListener("DOMContentLoaded", function() {
    var profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            var dogName = document.getElementById('dogName').value;
            var dogAge = document.getElementById('dogAge').value;
            var breed = document.getElementById('breed').value;
            var gender = document.getElementById('gender').value;
            var biography = document.getElementById('biography').value;

            // Save profile information in session storage
            var profile = {
                dogName: dogName,
                dogAge: dogAge,
                breed: breed,
                gender: gender,
                biography: biography
            };
            sessionStorage.setItem('profile', JSON.stringify(profile));

            // Redirect to index.html after profile creation
            window.location.href = 'index.html';
        });
    }
});