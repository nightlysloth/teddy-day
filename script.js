// Navigation Logic
function nextSection(id) {
    // Hide all sections
    document.querySelectorAll('section').forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active');
    });
    
    // Show the target section
    const target = document.getElementById(id);
    target.classList.remove('hidden');
    target.classList.add('active');
    
    // Trigger sparkle effect for a touch of magic!
    createSparkles();
}

function resetGame() {
    nextSection('hero');
}

// Sparkle Animation Logic
function createSparkles() {
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨'; // Using sparkle emoji
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh'; // Start from anywhere on screen
        sparkle.style.animationDuration = (Math.random() * 2 + 2) + 's'; // Vary speed
        sparkle.style.opacity = Math.random() * 0.7 + 0.3; // Vary opacity
        document.getElementById('sparkle-container').appendChild(sparkle);
        
        // Cleanup memory
        setTimeout(() => sparkle.remove(), 3000);
    }
}

// Initial sparkle burst on load
document.addEventListener('DOMContentLoaded', createSparkles);
