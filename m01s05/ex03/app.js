/* console.warn(`a.Stiind ca un camp dreptunghiular de hamei produce 25kg/m2, ce diferenta de productie este intre un teren de 100m pe 250m
 si unul de 350m pe 200m?

b.Stiind ca din 10kg de hamei produc 2.5l de bere, cati litri de bere va produce un teren de 400m pe 370m?
`);

//a
let l = 100;
let L = 250;

var calculateRectangleArea = function (L, l) {
  return L * l;
};
const firstArea = calculateRectangleArea(L, l);

l = 200;
L = 350;

const secondArea = calculateRectangleArea(L, l);

var differenceOfHop = (secondArea - firstArea) * 25;
console.log(differenceOfHop);

//b
l = 370;
L = 400;
const thirdArea = calculateRectangleArea(L, l);
// 25kg*thirdArea->x
//x/(10*2.5)=y

let productionThirdArea = 25 * thirdArea;
let beerOfThirdArea = productionThirdArea * (2.5 / 10);
console.log(beerOfThirdArea);

console.warn(`Stiind ca un camp dreptunghiular de grau produce 32kg/m2 de faina, afla si afiseaza cate kilograme de paine produce un camp de 300 pe 200 metri,
stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.
Dar doua campuri de 150 pe 200 si 500 pe 300 in total?`);

l = 200;
L = 300;
const firstField = calculateRectangleArea(L, l);
const productionFirstField = firstField * 32;
const breadFirstProduction = productionFirstField * 2.5;
*/

const calculateRectangleArea = function (width, length) {
  const area = width * length;

  return area;
};

console.warn(`Stiind ca un camp dreptunghiular de hamei produce 25kg/m2 ,
 ce diferenta de productie este intre un teren de 100m pe 250m si unul
 de 350m pe 200m?`);

let field1Width = 100;
let field1Length = 250;
let field2Width = 200;
let field2Length = 350;
let barleyYield = 25;
let beerYield = 2.5 / 10;

const field1Yield =
  calculateRectangleArea(field1Width, field1Length) * barleyYield;
const field2Yield =
  calculateRectangleArea(field2Width, field2Length) * barleyYield;
console.log(field2Yield - field1Yield);

console.warn(
  `Stiind ca din 10kgs de hamei produc 2.5l de bere, cati litri de bere va produce un teren de 400m pe 370m?`,
);

const field3Yield = calculateRectangleArea(400, 370) * barleyYield;
const field3BeerYield = field3Yield * beerYield;
console.log(field3BeerYield);

console.warn(`Stiind ca un camp dreptunghiular de grau produce 32kg/m2
de faina, afla si afiseaza cate kilograme de paine produce un camp de 300
pe 200 metri, stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.`);

const wheatYield = 32;
const breadYield = 2.5;

const field1WheatYield = calculateRectangleArea(200, 300) * wheatYield;
const field1BreadYield = field1WheatYield * breadYield;

console.log(field1BreadYield);

console.warn(`Dar doua campuri de 150 pe 200 si 500 pe 300 in total?`);

const field5 = calculateRectangleArea(150, 200);
const field6 = calculateRectangleArea(300, 500);
const field2WheatYield = (field5 + field6) * wheatYield;
const field2BreadYield = field2WheatYield * breadYield;

console.log(field2BreadYield);
