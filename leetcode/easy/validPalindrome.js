// #125
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Note: For the purpose of this problem, we define empty string as valid palindrome.

var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    let filteredString = s.toLowerCase().replace(/[^0-9a-z]/gi, '');

    while(left < right) {
        if(filteredString[left] !== filteredString[right]) return false;
        left++;
        right--;
    }
    
    return true;
};