// DOM method adalah perintah yang digunakan Javascript dalam menjalankan tugas untuk elemen HTML.
// contoh:
function myFunction() {
    document.getElementById("idName").innerHTML = "Hello World !"
}

//innerHTML
//innerHTML adalah properti DOM untuk mendapatkan isi dari sebuah tag HTML. 
//Perhatikan perbedaan output dari code yang menggunakan dan tidak menggunkana innerHTML:
console.log(document.getElementById("idName"))
console.log(document.getElementById("idName").innerHTML)

//Jenis-jenis JS memanggil element HTML:
let templateId = document.getElementById("example-id")
let templateClass = document.getElementsByClassName("example-class")[index]
let templatetagName = document.getElementsByTagName("example-tag")[index]
let templateQuerySelectorId = document.querySelector("#example-id")
let templateQuerySelectorClass = document.querySelector(".example-class")
let templateQuerySelectorTag = document.querySelector("example-tag")
let tempalateQuerySelectorAll = (document.querySelectorAll("p")).forEach((paragraph, index) => {
    console.log(`Paragraph ${index + 1}: ${paragraph.textContent}`)
})

//Contoh-contoh pemanggilan HTML bedasarkan cara:
let listCallHTML = [document.getElementById("idName").innerHTML, document.getElementByClassName("atomWaffenDivision")[0].innerHTML, document.getElementsByTagName(p)[0].innerHTML]
for (i=0; i<3; i++) {
    console.log(listCallHTML[i])
}
//HOMEWORK: 
//QUERY SELECTOR, FIND H3 AND CHANGE TEXT BACKGROUND TO RED
let querySelector = document.querySelector("h3").style.backgroundColor="red";

//inner HTML
// Property innerHTML digunakan untuk mendapatkan data di dalam sisi HTML atau mengubah konten pada elemen seperti teks atau gambar.
//Contoh:
let innerHTMLexample = document.getElementById("example-id").innerHTML = "Hello World !"

//attribute
//Property attribute digunakan untuk mengubah atribut pada elemen seperti id, type, class, dll.
//Contoh: 
let  changeAttributeExample = document.getElementById("example-id").className="blue"
getElements
//style
//style.property digunakan untuk mengubah properti tertentu pada elemen.
//Contoh:
let styleExample = document.getElementByClassName("example-class").style.color="green"

//setAttribute
// Method setAttribute kegunaanya sama seperti properti attribute, tetapi berbeda pada penulisan pasangan property dan valuenya.
//Contoh:
let setAttributeExample = document.getElementsByTagName("example-tag")[index].setAttribute("class", "blue")


//Adding Element
// Penambahan elemen melalui Javascript biasanya dilakukan hanya ketika kita ingin menampilkannya dalam kondisi tertentu.
// Metode yang digunakan:
// ✔createElement() -> creating element
// ✔appendChild() -> adding element
//Contoh:

//createElement
let paragraph = document.createElement("p");
paragraph.innerHTML = "New Paragraph";

//appendChild
document.body.appendChild(paragraph);


//Remove Element
//Contoh:
document.body.removeChild(paragraph)
//Contoh:


//childNodes
//Kita bisa juga menghapus salah satu child dari sebuah Parent element menggunakan properti childNodes[index]. 
// Property childNodes menampung semua child yang dimiliki parent element.
//Contoh:
//Liat meeting9.html untuk melihat HTMLnya
let list = document.getElementById("language");
list.removeChild(list.childNodes[1])


//querySelector()
//querySelector() adalah metode digunakan untuk mendapatkan
//atribut pertama dari pemilih yang disebutkan. 
//Contoh:
document.querySelector("p")
document.querySelector(".class") // class
document.querySelector("#id") // id
document.querySelector("p.class") // Elemen dengan class title


//querySelectorAll()
//Masih termasuk dalam metode querySelector(), metode querySelectorAll() digunakan untuk mendapatkan semua atribut dengan nilai pemilih yang ditentukan.
document.querySelectorAll("p")
