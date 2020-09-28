// #125
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Note: For the purpose of this problem, we define empty string as valid palindrome.

var isPalindrome = function(s) {
    const filteredString = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    let left = 0;
    let right = filteredString.length - 1;
    
    while(left < right) {
        if(filteredString[left] != filteredString[right]) return false;
        left++;
        right--;
    }
    
    return true;
};