document.addEventListener("DOMContentLoaded", function() {
    var addDogForm = document.getElementById('addDogForm');
    if (addDogForm) {
        addDogForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            var dogName = document.getElementById('dogName').value;
            var dogAge = document.getElementById('dogAge').value;
            var breed = document.getElementById('breed').value;
            var gender = document.getElementById('gender').value;
            var biography = document.getElementById('biography').value;

            // Save additional dog information in session storage
            var additionalDog = {
                dogName: dogName,
                dogAge: dogAge,
                breed: breed,
                gender: gender,
                biography: biography
            };
            var profile = JSON.parse(sessionStorage.getItem('profile')) || [];
            profile.push(additionalDog);
            sessionStorage.setItem('profile', JSON.stringify(profile));

            // Update the page to show the new dog
            window.location.href = 'index.html';
        });
    }
});