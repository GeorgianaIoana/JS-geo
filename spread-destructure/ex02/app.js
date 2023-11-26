console.warn(`
1.Folosind operatorul spread, salveaza array1 in array2, astfel incat secventa sa fie completa.
2.Salveaza array4 in array3 astfel incat in array3 sa fie secventa completa.
3.Combina array5 cu array6 intr-un array numit array7 astfel incat secventa sa fie completa.
4.Cloneaza array8 in array9, apoi inverseaza array8 si afiseaza numerele in consola pe linii diferite.
`);

let array1 = [60, 70, 80];
let array2 = [50, ...array1, 90];

let array4 = [40, 50];
let array3 = [10, 20, 30, ...array4, 60, 70, 80];

let array5 = [101, 102, 103, 104];
let array6 = [106, 107, 108];
let array7 = [...array5, 105, ...array6];

let array8 = [5, 4, 3, 2, 1];
let array9 = [...array8];
array8.reverse();

for (i = 0; i < array8.length; i++) {
  console.log(array8[i]);
}
