const classBtn = document.querySelectorAll(".btn")
const classBtn1 = classBtn[1]
const classDiv = document.querySelectorAll(".div")[0]

classBtn1.addEventListener("click", function () {
    classDiv.innerHTML = "<p>Hello World</p>"
});
