document.addEventListener("DOMContentLoaded", function() {
    includeHTML(initializeMap);
});

function includeHTML(callback) {
    let elements = document.querySelectorAll('[data-include]');
    let totalElements = elements.length;
    let loadedElements = 0;

    console.log("Total elements to include:", totalElements);

    elements.forEach(function(element) {
        let file = element.getAttribute("data-include");
        console.log(`Attempting to load: ${file}`);
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Could not load file: ${file}`);
                }
                return response.text();
            })
            .then(data => {
                element.innerHTML = data;
                element.removeAttribute("data-include");
                loadedElements++;
                console.log(`Loaded ${file}, Total loaded: ${loadedElements}`);
                if (loadedElements === totalElements) {
                    console.log("All partials loaded");
                    callback(); // Call the callback after all partials are loaded
                }
            })
            .catch(error => {
                console.error(`Error loading ${file}:`, error);
            });
    });
}

function initializeMap() {
    console.log("Initializing map");
    if (document.getElementById('map')) {
        console.log("Map container found");
        var map = L.map('map').setView([37.4848, -122.2281], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Example locations (latitude, longitude)
        var locations = [
            {lat: 37.4864, lon: -122.2325, name: "Red Morton Community Park"},
            {lat: 37.4976, lon: -122.2510, name: "Stafford Park"},
            {lat: 37.4833, lon: -122.2340, name: "Stulsaft Park"}
        ];

        locations.forEach(function(location) {
            L.marker([location.lat, location.lon])
                .addTo(map)
                .bindPopup(location.name);
        });

        console.log("Map initialized");
    } else {
        console.log("Map container not found");
    }
}