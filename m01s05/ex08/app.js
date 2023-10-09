const button = document.getElementById('clicker');
const removeButton = document.getElementById('removeEvent');
const inputAge = document.getElementById('query');
const paragraphElement = document.getElementById('message');

function clickHandler() {
  alert('Ai apasat butonul!');
}

button.addEventListener('click', clickHandler);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});

inputAge.addEventListener('click', function () {
  const age = prompt('Introduceti varsta:');
  let message = '';
  if (age < 19) {
    message = `Ai ${age} ani.`;
  } else {
    message = `Ai ${age} de ani.`;
  }

  console.log(message);
  showMessage(message);
});

function showMessage(message) {
  paragraphElement.innerText = message;
}
