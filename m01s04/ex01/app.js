/* Cum am facut eu initial
var number = prompt('');

if (number % 2 === 0) {
  console.log('Nr este par');
} else {
  console.log('Nr este impar');
}

var messageElement = document.getElementById('message');

if (number % 2 === 0) {
  messageElement.innerText = 'Numarul este par';
} else {
  messageElement.innerText = 'Numarul este impar';
}
*/

// la clasa:
var userInput = prompt('Introdu un numar');
var number = Number(userInput);
var errorMessage = 'Nu s-a introdus un numar';
var paragraphElement = document.getElementById('message');

if (userInput === null || userInput.trim() === '' || isNaN(number)) {
  console.log(errorMessage);
} else if (number % 2 === 0) {
  var message = `Numarul  ${number} este par`;

  console.log(message);

  paragraphElement.innerText = message;
} else {
  var message = `Numarul  ${number} este impar`;

  console.log(message);

  paragraphElement.innerText = message;
}
