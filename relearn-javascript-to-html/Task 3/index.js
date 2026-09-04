const box = document.querySelectorAll("#box")[0]
const colorBtn = document.querySelectorAll("#colorBtn")[0]

colorBtn.addEventListener("click", function(){ 
    box.classList.add("red")
})

