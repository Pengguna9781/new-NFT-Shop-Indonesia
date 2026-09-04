const idMyBtn = document.getElementById("myBtn")

const idOutput = document.getElementById(`output`)

idMyBtn.addEventListener("click", function() {
    idOutput.innerHTML = "<p>Hello World</p>"
})

