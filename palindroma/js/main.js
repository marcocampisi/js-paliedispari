function isPalindrome(word) {
    const reverseWord = word.toLowerCase().split('').reverse('').join('');
    return word.toLowerCase() === reverseWord;
}

const inputWord = prompt('Inserisci una parola:');

