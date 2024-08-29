const images = document.querySelectorAll('.rotating-image');
let currentDuration = 5; // Initial duration in seconds

document.getElementById('slowDown').addEventListener('click', () => {
    currentDuration += 2; // Increase duration to slow down
    updateAnimationDuration();
});

document.getElementById('speedUp').addEventListener('click', () => {
    currentDuration = Math.max(1, currentDuration - 2); // Decrease duration to speed up
    updateAnimationDuration();
});

function updateAnimationDuration() {
    images.forEach(img => {
        img.style.animationDuration = `${currentDuration}s`;
    });
}
