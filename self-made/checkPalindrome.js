// make a function that checks if the string input can be arranged to make a palindrome or not

function checkPalindrome(string) {
    const letters = {};

    for(let i = 0; i < string.length; i++) {
        if(letters[string[i]]) {
            letters[string[i]]++;
        } else {
            letters[string[i]] = 1;
        }
    }

    let count = 0;
    for(letter in letters) {
        if(letters[letter] % 2 != 0) count++;
        if(count > 1) return false;
    }

    return true;
}

console.log(checkPalindrome('aasssddd'))