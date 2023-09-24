/*cum am facut eu
console.warn(`Folosind functia calculateRectangleArea(), afiseaza suprafata unui dreptunghi de 4 pe 3

Afiseaza suprafata totala a unor dreptunghiuri de 5 pe 3, respectiv 3 pe 2. Foloseste variabile.

Calculeaza intr-o variabila numita squareSurface aria unui patrat de 3 pe 3.
`);

function calculateRectangleArea() {
  return 4 * 3;
}
console.log(calculateRectangleArea());

let L = 5;
let l = 3;

function rectangleArea(L, l) {
  return L * l;
}
console.log(rectangleArea(L, l));

L = 3;
l = 2;
console.log(rectangleArea(L, l));*/

function calculateRectangleArea(width, length) {
  const area = width * length;

  return area;
}

console.warn(
  `Folosind functia calculateRectangleArea(),
  afiseaza suprafata unui dreptunghi de 4 pe 3`,
);

console.log(calculateRectangleArea(3, 4));

console.warn(`Afiseaza suprafata totala a unor dreptunghiuri de 5 pe 3, respectiv 3 pe 2.
 Foloseste variabile.`);

const rectangle1Surface = calculateRectangleArea(3, 5);
const rectangle2Surface = calculateRectangleArea(2, 3);

console.log(rectangle1Surface + rectangle2Surface);
console.log(rectangle1Surface);
console.log(rectangle2Surface);

console.warn(`Calculeaza intr-o variabila numita squareSurface aria unui patrat de 3 pe 3.,
`);

const squareSurface = calculateRectangleArea(3, 3);
console.log(squareSurface);
const rectangle3Surface = calculateRectangleArea(9, 12);
console.log(rectangle3Surface);

console.warn(
  `Afiseaza suprafata totala a trei dreptunghiuri de 15 pe 31,  8 pe 9, respectiv 10 pe 5. Foloseste variabile.`,
);

const rectangle4Surface = calculateRectangleArea(15, 31);
const rectangle5Surface = calculateRectangleArea(8, 9);
const rectangle6Surface = calculateRectangleArea(5, 10);
console.log(rectangle4Surface + rectangle5Surface + rectangle6Surface);

console.warn(
  `Calculeaza intr-o variabila numita anotherSquare aria unui patrat de 8 pe 8.`,
);

const anotherSquare = calculateRectangleArea(8, 8);
console.log(anotherSquare);
