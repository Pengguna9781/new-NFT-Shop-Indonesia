let slides = document.querySelectorAll(".slide");
let buttons = document.querySelectorAll(".slider-btn");
let currentSlide = 1;

let manualNav = function(manual) {
    slides.forEach(function (slide) {
        slide.classList.remove("active");

        buttons.forEach((btn) =>{
            btn.classList.remove("active");
        });
    });

    slides[manual].classList.add("active")
    slide[manual].classList.add("active")
}

buttons.forEach(function(btn, i) {
    btn.addEventListener("click", function() {
        manualNav(i);
        currentSlide = i;
    })
})

// Autoplay

let repeate = function(activeClass) {
    let active = document.getElementByClassName("active")
    
    let i = 1;
    let repeater = function() {
        setTimeOut(function() {
            setTimeout(function() {
                [...active].forEach(function(activeSlide) {
                    activeSlide.classList.remove("active");
                });

                slides[i].classList.add("active");
                buttons[i].classList.add("active");

                if(slides.length == i) {
                    i = 0;
                }
                if (i >- slides.length) {
                    return;
                }
                repeater(); 
            }, 5000); 
        },
        repeater())
    }
}
repeate()
