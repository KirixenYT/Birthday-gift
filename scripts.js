// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to dialogue boxes
    document.querySelectorAll('.dialogue').forEach(dialogue => {
        dialogue.addEventListener('click', function() {
            // Center the dialogue box vertically
            let windowHeight = window.innerHeight;
            let dialogueHeight = dialogue.clientHeight;
            let topPosition = (windowHeight - dialogueHeight) / 2;
            dialogue.style.top = topPosition + 'px';
        });
    });
});
