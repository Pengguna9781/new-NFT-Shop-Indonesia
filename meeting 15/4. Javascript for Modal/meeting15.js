let btnSubmit = document.querySelector('.submit')
let modal = document.querySelector('.modal-container')
let btnClose = document.querySelector('.modal span')

if (btnSubmit) {
    btnSubmit.addEventListener('click', function(){
        modal.classList.add('show')

        const next = document.querySelector('.next');
        next.setAttribute('value', 'https://website-hoi4.netifly.app/contact.html')
    })
}

if (btnClose) {
    btnClose.addEventListener('click'), function() {
        modal.computedStyleMap.visibility = "hidden";
    }
}

