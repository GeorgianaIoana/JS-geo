// Folosind metoda writeFileSync() scrie intr-un fisier numit my-file.txt textul: “Invat node.js”
//Folosind ambele metode de citit si de scris, citeste textul scris in my-file.txt si
// adauga-i data curenta astfel incat sa poti scrie intr-un alt fisier (nume la alegere)
//“Invat node.js, azi, zz.ll.aaaa!” Atentie la punctuatie. Foloseste template strings.

const { writeFileSync } = require('fs');
writeFileSync('./my-file.txt', 'Invat node.js', 'utf8');
