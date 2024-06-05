// Example JavaScript to handle form submission and validation for the schedule meeting form
document.getElementById('meetingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var meetingName = document.getElementById('meetingName').value;
    var location = document.getElementById('location').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var description = document.getElementById('description').value;

    // Simple validation (you can enhance this as needed)
    if (meetingName && location && date && time) {
        alert('Meeting scheduled successfully!');
        // Here, you can add code to submit the form data to your server using AJAX or other methods
    } else {
        alert('Please fill in all required fields.');
    }
});