// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.
// Dare l’output relativo.

// creo una funzione, l'argomento sarà la parola da controllare
function palindromeWord(word) {

    console.log(word);

    // inverto l'ordine delle lettre per leggere la parola al contario
    // - .split: divide la stringa in lettere e le mette in un array
    // - .reverse: inverte l'ordine degli elementi dell'array
    // - .join: unisce gli elementi ell'array in una stringa 
    let wordReverse = word.split('').reverse().join('')
    console.log(wordReverse);

    // confronto la parola inserita con quella invertita
    // se sono uguali sono palindrome, altrimenti no
    // tampo in pagina il risulato
    const element = document.getElementById("result");
    if (word === wordReverse) {
        element.innerHTML = 'La parola &egrave; palindroma.';
        console.log('parola palindroma');
    } else {
        element.innerHTML = 'La parola non &egrave; palindroma.';
        console.log('parola non palindroma');
    }
}

// richiamo la funzione, chiedo all'utente di inserire una parola
palindromeWord(prompt("Inserisci una parola."));