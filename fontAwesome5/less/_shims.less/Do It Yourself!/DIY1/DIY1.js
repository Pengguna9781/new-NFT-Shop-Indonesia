// let item  = document.getElementsByClassName("apps").length
// let i;
// for (i=0; i< item; i++) {
//     let result = document.getElementsByClassName("apps")[i].innerHTML
//     console.log(result)
// }

let getDocument = document.getElementsByTagName("p")
let res = getDocument[Math.floor(Math.random(2))].innerHTML= "test"
// let result = getDocument[Math.floor(Math.random(getDocument.length))].innerHTML = "Hello Programmer !"