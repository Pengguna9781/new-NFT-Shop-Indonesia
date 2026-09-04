// forEach() Method
// forEach adalah function yang mengulangi perintah bedasarkan panjangnya array. (Sama seperti for loop)
// Syntax:
let arrayName = [1, 2, 3, 4, 5];
arrayName.forEach(function(variableName){
    //command block
})

// Perbedaan For Each dan For Loop
let genres = ['Jazz', 'Pop', 'Rock', 'Dangdut']

// for loop
for(let i=0; i<genres.length; i++) {
    document.write(`I choose ${genres[i]}` + '<br>')
}

//for each
genres.forEach(function(genre) {
    document.write(`I choose ${genre}` + '<br>')
})