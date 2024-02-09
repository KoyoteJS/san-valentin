function changeLanguage() {
    const languageSelector = document.getElementById('language');
    const language = languageSelector.value;
    const title = document.getElementById('title');
    const messageElements = document.querySelectorAll('.message p');
    const signatureElement = document.querySelector('.signature');

    if (language === 'nl') {
        title.textContent = 'Gelukkige Valentijnsdag, [Nombre de tu amada]!';
        messageElements[0].textContent = 'Hallo [Nombre de tu amada],';
        messageElements[1].textContent = 'Gelukkige Valentijnsdag! 💖';
        messageElements[2].textContent = 'Ik hoop dat je een dag vol liefde en vreugde hebt.';
        messageElements[3].textContent = 'Ik wil dat je weet dat je veel voor me betekent en ik ben erg dankbaar dat je in mijn leven bent.';
        messageElements[4].textContent = 'Ik wens je een geweldige dag!';
        signatureElement.innerHTML = 'Met liefde,<br>[Tu nombre]';
    } else {
        title.textContent = '¡Feliz San Valentín, [Nombre de tu amada]!';
        messageElements[0].textContent = 'Hola [Nombre de tu amada],';
        messageElements[1].textContent = '¡Feliz San Valentín! 💖';
        messageElements[2].textContent = 'Espero que tengas un día lleno de amor y alegría.';
        messageElements[3].textContent = 'Quiero que sepas que significas mucho para mí y estoy muy agradecido por tenerte en mi vida.';
        messageElements[4].textContent = '¡Que tengas un día increíble!';
        signatureElement.innerHTML = 'Con cariño,<br>[Tu nombre]';
    }
}
