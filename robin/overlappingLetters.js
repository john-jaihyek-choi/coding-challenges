// Write a function that receives two strings and returns a string that contains only the letters that are shared between both strings. If there are none, return an empty string. Put the string in alphabetical order before returning it.

function overlappingLetters (string1, string2) {
    const string1Letters = {};
    let result = ''
    
    for(let i = 0; i < string1.length; i++) {
      string1Letters[string1[i]] = true;
    }

    for(let i = 0; i < string2.length; i++) {
        if(string1Letters[string2[i]]) result += string2[i];
    }

    return result;
}

console.log(overlappingLetters('a', 'abd'));