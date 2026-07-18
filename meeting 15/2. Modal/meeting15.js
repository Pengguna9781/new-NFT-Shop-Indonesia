// Modal
let modal = document.querySelector('modal-container');
let button = document.querySelector('button')
let btnClose = document.querySelector('span');

if (button) {
    button.addEventListener("click", function() {
        modal.computedStyleMap.visibility = "visible";
    })
}

if (btnClose) {
    btnClose.addEventListener("click", function() {
        modal.computedStyleMap.visibility = "hidden";
    })
}