document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // Add any other application-specific initialization code here
    // For example, adding event listeners for other elements

    var profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', function(event) {
            // Validation code here
        });
    }

    var addDogButton = document.querySelector('.add-dog');
    if (addDogButton) {
        addDogButton.addEventListener('click', function(event) {
            // Code to add another dog
        });
    }
});