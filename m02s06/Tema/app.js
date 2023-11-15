const { writeFileSync } = require('fs');
const value = process.argv.slice(2);

function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}

function calculateSquareArea(side) {
  return Math.pow(side, 2);
}

function calculateRectangleArea(length, width) {
  return length * width;
}

function fileLog(data) {
  writeFileSync('.log', data, function (error) {
    if (error) {
      console.error('Eroare la scrierea fisierulului');
    }
  });
}

if (value[0] === '-h') {
  console.log('Exemplu: cerc 6, patrat 5, dreptunghi 4 2');
} else if (value[0] === 'cerc' && value[1]) {
  const radius = value[1];
  if (!isNaN(radius)) {
    const area = calculateCircleArea(radius);
    console.log(area);
    fileLog(`Cerc, Raza: ${radius}, Suprafata: ${area}`);
  } else {
    console.error('Raza are numar invalid.');
  }
} else if (value[0] === 'patrat' && value[1]) {
  const side = value[1];
  if (!isNaN(side)) {
    const area = calculateSquareArea(side);
    console.log(area);
    fileLog(`Patrat, Latura: ${side}, Suprafata: ${area}`);
  } else {
    console.error('Numar invalid.');
  }
} else if (value[0] === 'dreptunghi' && value[1] && value[2]) {
  const length = value[1];
  const width = value[2];
  if (!isNaN(length) && !isNaN(width)) {
    const area = calculateRectangleArea(length, width);
    console.log(area);
    fileLog(
      `Dreptunghi, Latime: ${width} Lungime: ${length}, Suprafata: ${area}`,
    );
  } else {
    console.error('Introduceti numere valide pentru lungime si latime.');
  }
} else if (value[0] === '-clear') {
  fileLog('');
} else {
  console.error("Eroare. Folosește 'node app -h'.");
}
