document.addEventListener('DOMContentLoaded', function() {
    const message = document.getElementById('message');
    const fireworksWords = ['love', 'Love', 'LOVE', 'LoVe']; // Palabras que activan los fuegos artificiales
    
    message.addEventListener('input', function() {
        const text = message.textContent;
        if (fireworksWords.some(word => text.includes(word))) {
            startFireworks();
        }
    });

    function startFireworks() {
        const container = document.querySelector('.container');
        const fireworks = document.createElement('div');
        fireworks.classList.add('firework');
        container.appendChild(fireworks);
        setTimeout(() => {
            container.removeChild(fireworks);
        }, 1000);
    }
});
