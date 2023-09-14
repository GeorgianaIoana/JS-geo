var person = {
  firstName: 'Geo',
  lastName: 'Stanciu',
  email: 'MN@gmail.com',
  birthYear: 1980,
  pets: [
    {
      name: 'Mario',
      species: 'poodle',
      age: 13,
    },
    {
      name: 'Maia',
      species: 'pechinez',
      age: 1,
    },
    {
      name: 'Ronald',
      species: 'boxer',
      age: 4,
    },
  ],
  zipCode: '124300',
};

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.log((2023 - person.pets[2].age).toString());

var yearDifference = 2023 - person.birthYear - person.pets[0].age;

console.log(yearDifference.toString());

var petName = person.pets[0].name;

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    yearDifference +
    ' ani.',
);

var prop01Element = document.getElementById('prop01');
prop01Element.innerText =
  person.firstName +
  ', ' +
  person.pets[0].name +
  ', ' +
  person.pets[1].name +
  ', ' +
  person.pets[2].name +
  ' locuiesc toti in aceeasi casa';

var prop02Element = document.getElementById('prop02');
prop02Element.innerText = person.pets[0].age - person.pets[2].age;

var prop03Element = document.getElementById('prop03');
prop03Element.innerText =
  'Ma numesc ' +
  person.firstName +
  ' ' +
  person.lastName +
  ', m-am nascut in ' +
  person.birthYear +
  ' si codul meu postal este: ' +
  person.zipCode;

var prop04Element = document.getElementById('prop04');
prop04Element.innerText =
  'Animalele mele s-au nascut in ' +
  (2023 - person.pets[0].age) +
  ', ' +
  (2023 - person.pets[1].age) +
  ', ' +
  (2023 - person.pets[2].age) +
  '.';
