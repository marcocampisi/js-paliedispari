function isPalindrome(word) {
    //Manipolo la stringa input per generare la parola al contario senza spazi e minuscola
    const reverseWord = word.toLowerCase().split('').reverse('').join('');
    //Restituisco True se la stringa è palindroma, altrimenti False
    return word.toLowerCase() === reverseWord;
}

const inputWord = prompt('Inserisci una parola:'); //Input dell'utente

if (isPalindrome(inputWord)) { //Restituisco il risultato
    alert('La parola inserita è palindroma')
}
else {
    alert('La parola inserita non è palindroma')
}