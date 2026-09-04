const mainTitle = document.querySelectorAll("#mainTitle")[0]
const button = document.querySelectorAll("#button")[0]

button.addEventListener("click", function() {
    mainTitle.innerHTML = "<h1>Hello World</h1>"
})