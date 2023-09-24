/* Cum am facut eu:
console.log(
  new Date().getHours() +
    ':' +
    new Date().getMinutes() +
    ':' +
    new Date().getSeconds() +
    ':' +
    new Date().getMilliseconds(),
  'Am ajuns la Pixellab',
);


const hours = new Date().getHours();

const minutes = new Date().getMinutes();

const seconds = new Date().getSeconds();

const miliseconds = new Date().getMilliseconds();

function getTime() {
  const exactTime = `${hours}:${minutes}:${seconds}:${miliseconds}`;
  return `${exactTime}, am ajuns la Pixellab.`;
}
console.log(
  `${hours}:${minutes}:${seconds}:${miliseconds}, am ajuns la Pixellab`,
);

console.log(getTime());*/

// clasa
function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const miliseconds = date.getMilliseconds();
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${miliseconds}`;
}

const exactTime = getTime();

console.log(`${getTime()}, am ajuns la Pixellab`);

const messageElement = document.getElementById('message');
messageElement.innerText = `${exactTime}, am ajuns la Pixellab.`;
