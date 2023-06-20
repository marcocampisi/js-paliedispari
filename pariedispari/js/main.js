//Funzione per generare numero casuale

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Funzione per verificare se il numero è pari

function isEven(number) {
    return numero % 2 === 0;
}