// Folosind metoda writeFileSync() scrie intr-un fisier numit my-file.txt textul: “Invat node.js”
//Folosind ambele metode de citit si de scris, citeste textul scris in my-file.txt si
// adauga-i data curenta astfel incat sa poti scrie intr-un alt fisier (nume la alegere)
//“Invat node.js, azi, zz.ll.aaaa!” Atentie la punctuatie. Foloseste template strings.

const { readFileSync } = require('fs');
const myText = readFileSync('./my-file.txt', 'utf8');
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const todayDate = `${day}.${month}.${year}`;

const fullMessage = myText + ', azi, ' + todayDate + '!';

const { writeFileSync } = require('fs');
writeFileSync('./second-file.txt', fullMessage, 'utf8');
