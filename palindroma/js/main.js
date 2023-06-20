function isPalindrome(word) {
    const reverseWord = word.toLowerCase().split('').reverse('').join('');
    return word.toLowerCase() === reverseWord;
}

const inputWord = prompt('Inserisci una parola:');

if (isPalindrome(inputWord)) {
    alert('La parola inserita è palindroma')
}
else {
    alert('La parola inserita non è palindroma')
}