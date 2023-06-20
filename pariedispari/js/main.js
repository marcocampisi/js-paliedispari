//Funzione per generare numero casuale

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Funzione per verificare se il numero è pari

function isEven(number) {
    return number % 2 === 0;
}

//Logica base del programma

const userInput = prompt('Scegli pari o dispari:');
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5: '));

if (userInput !== 'pari' && userInput !== 'dispari') { //Validazione input
    alert('Scelta non valida, riprova.');
} else if (userNumber < 1 || userNumber > 5) {
    alert('Numero non valido, riprova.');
} else {
    const computerNumber = getRndInteger(1, 5);
    alert(`Il numero del computer è ${computerNumber}`);

    const sum = userNumber + computerNumber;
    alert(`La somma dei due numeri è: ${sum}`);

    let result;
    if (isEven(sum)) {
        result = 'pari';
        alert('La somma è pari.');
    } else {
        result = 'dispari';
        alert('La somma è dispari.');
    }

    if (result === userInput) {
        alert('Hai vinto!');
    } else {
        alert('Hai perso!');
    }
}