console.warn(`1.Folosind operatorul spread, salveaza array1 in array2, astfel incat secventa sa fie completa.
2.Salveaza array4 in array3 astfel incat in array3 sa fie secventa completa.
3.Combina array5 cu array6 intr-un array numit array7 astfel incat secventa sa fie completa.
4.Cloneaza array8 in array9, apoi inverseaza array8 si afiseaza numerele in consola pe linii diferite.
`);

let array1 = [10, 20, 30];
let array2 = [...array1, 40, 50];

let array4 = [104, 105];
let array3 = [101, 102, 103, ...array4, 106, 107, 108];

let array5 = [1, 2, 3, 4];
let array6 = [6, 7, 8];
let array7 = [...array5, 5, ...array6];

let array8 = [1, 2, 3, 4, 5];
let array9 = [...array8];
array8.reverse();

for (i = 0; i < array8.length; i++) {
  console.log(array8[i]);
}
