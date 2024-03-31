// script.js

// Function to animate elements using anime.js
function animateElements() {
    // Example animation for the header
    anime.timeline({ loop: false })
        .add({
            targets: 'header h1',
            translateX: [-50, 0],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000
        })
        .add({
            targets: 'header h4',
            translateX: [50, 0],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000
        })
        anime.timeline({ loop: false })
        .add({
            targets: 'footer',
            translateY: [0, -50],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000
        });


    // Add more animations for other sections or elements as needed
}

// Trigger animations when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    animateElements();
});
