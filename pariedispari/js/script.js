// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

// creo una funzione per generare numeri casuali
function ramdomNum(min,max) {
    let rNum = Math.floor(Math.random() * max) + min;
    return rNum;
}

// creo una funzione per sommare 2 numeri
function sumNum(num1,num2) {
    let sum = num1 + num2;
    return sum;
}

// chiedo all'utende di scegliere pari o dispari
const bet = (prompt('Scegli pari o dispari.'));
console.log(bet);

// chiedo all'utente di sceglier un numero da 1 a 5
const userNum = parseInt(prompt('Scegli un numero da 1 a 5.'));
console.log(userNum);

// genero un numero casuale richiamando la funzione
const pcNum = ramdomNum(1,5);
console.log(pcNum);

// sommo il numero dell'utente con il numero del pc richiamando la funzione
const result = sumNum(userNum,pcNum);
console.log(result);

// controllo se la somma è pari o dispari
let evenOrOdd = '';
if (result % 2 === 0) {
    evenOrOdd = 'pari';
} else {
    evenOrOdd = 'dispari';
}
console.log(evenOrOdd);

// confronto la scelta dell'utente con il risultato e stampo in pagina il risulato del gioco
const element = document.getElementById("result");
if (bet === evenOrOdd) {
    element.innerHTML = 'Hai vinto.'
    console.log("l'utente ha vinto");
} else {
    element.innerHTML = 'Hai perso.'
    console.log("l'utente ha perso");
}