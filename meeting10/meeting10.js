function playMusic() {
    const audio = new Audio('assets/funk-do-litoral-ultraslowed.mp3');
    audio.play().catch(error => {
    console.log("Autoplay was prevented. Waiting for user interaction.");
    });
}