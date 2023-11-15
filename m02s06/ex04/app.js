const { readFileSync } = require('fs');
const firstMessage = readFileSync('./another.txt', 'utf-8');
const secondMessage = readFileSync('./my-file.txt', 'utf-8');
const thirdMessage = readFileSync('./dir/this-other-file.txt', 'utf-8');
console.log(firstMessage + ' ' + secondMessage + ' ' + thirdMessage + '.');
