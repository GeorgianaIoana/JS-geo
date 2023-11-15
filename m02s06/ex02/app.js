//Folosind process.argv creaza in app.js un script care sa calculeze suprafata unui patrat
//In mod similar creeaza un script numit dreptunghi.js care sa poata calcula suprafata unui dreptunghi din parametrii dati
//Creeaza un script numit cerc.js care sa calculeze suprafata unui cerc folosind parametrii de intrare in consola

let side = process.argv[2];
side = Number(side);
console.log(side ** 2);
