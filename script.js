document.addEventListener('DOMContentLoaded', function() {
    const speakButton = document.getElementById('speakBtn');

    speakButton.addEventListener('click', function() {
        const message = "Olá! Como posso ajudar você hoje?";
        speak(message);
    });

    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    }
});
