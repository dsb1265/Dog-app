// Simple script to toggle the navigation menu on mobile devices
document.addEventListener('DOMContentLoaded', function() {
    const navButton = document.createElement('button');
    navButton.innerText = 'Toggle Navigation';
    navButton.addEventListener('click', function() {
        const nav = document.querySelector('nav ul');
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });

    const header = document.querySelector('header');
    header.insertBefore(navButton, header.childNodes[0]);
});

// Example function to log something to console
function greet() {
    console.log('Welcome to Dog Walking in Redwood City!');
}

// Call greet when the document is fully loaded
document.addEventListener('DOMContentLoaded', greet);