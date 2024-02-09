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
        // Código para iniciar los fuegos artificiales
        // Aquí puedes agregar tu código para mostrar el efecto de fuegos artificiales
        // Puedes utilizar bibliotecas como fireworks.js o crear tu propia animación
        alert("¡Fuegos artificiales!");
    }
});
