/* Cum am facut eu initial:

var number = prompt('');

var messageElement = document.getElementById('message');

if (number === '20') {
  messageElement.innerText = 'Numarul este egal cu 20';
} else if (number > 20) {
  messageElement.innerText = 'Numarul introdus este mai mare decat 20';
} else {
  messageElement.innerText = 'Numarul introdus este mai mic decat 20';
}*/

// Cum am facut la clasa:

var userInput = prompt('Introdu un numar:');
var number = Number(userInput);
var limit = 20;
var paragraphElement = document.getElementById('message');

if (isNaN(number) || userInput === null || userInput.trim() === '') {
  var message = 'Nu s-a introdus un numar.';

  paragraphElement.innerText = message;
} else if (number === limit) {
  var message = `Numarul este egal cu ${limit}`;

  paragraphElement.innerText = message;
} else if (number > limit) {
  var message = `Numarul este mai mare decat ${limit}`;

  paragraphElement.innerText = message;
} else {
  var message = `Numarul este mai mic decat ${limit}`;

  paragraphElement.innerText = message;
}
