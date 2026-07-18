function playMusic() {
    const audio = new Audio('assets/saya-jg-diam.mp3');
    audio.play().catch(error => {
    console.log("Autoplay was prevented. Waiting for user interaction.");
    });
}

function rotatePng(element) {
    element.style.transform="translate(5px, 5px)";
    element.style.transform="rotate(180deg)"
}