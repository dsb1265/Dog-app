document.addEventListener("DOMContentLoaded", function() {
    var dogBreeds = [
        "Labrador Retriever", "German Shepherd", "Golden Retriever", 
        "Bulldog", "Beagle", "Poodle", "Rottweiler", "Yorkshire Terrier"
        // Add more breeds as needed
    ];

    $("#breed").autocomplete({
        source: dogBreeds
    });
});