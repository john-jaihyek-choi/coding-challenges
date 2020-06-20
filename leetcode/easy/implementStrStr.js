// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Brainstorm:
// Key things:
    // function will return an index of first occurence or -1;
// Some possible errors:
    // undefined needle
    // undefined haystack
    // empty string needle
    // empty string haystack
    // lowercase and uppercase difference
// Possible solution:
    // check substrings of haystack with needle

// Initial thought:
    // set a condition to check for empty or invalid strings;
    // set a loop for haystack
        // set a condition to check if substring of string in range of i and i + needle.length is equal to needle
            // if true return i
    // return -1;

// Pseudocode:
//declare a function called strStr with 2 parameters, haystack and needle;
    // set a condition to check input and return 0 if haystack and needle.length is falsy OR needle is falsy;
    // set a loop that iterates haystack.lengh - needle.length many times; 
        // set a condition to check if returned value of calling substring method of haystack object, passing i and i + needle.length - 1 as arguments is equal to needle
            // in the above statement, I need to lowercase the haystack and needle
        // if true, return 1
    // otherwise return -1


function strStr(haystack, needle) {
    if((!haystack && !needle.length) || !needle) return 0;

    for(let i = 0; i <= haystack.length - needle.length; i++) {
        if(haystack.toLowerCase().substring(i,i + needle.length) == needle.toLowerCase()) return i; // O(n ^ 2) / O(1);
    }

    return -1
}

// How to implement by breaking down substring method
function strStr(haystack, needle) {
    if((!haystack && !needle.length) || !needle) return 0;
    for(let i = 0; i <= haystack.length - needle.length; i++) {
        let subString = ''
        for(let j = i; j < i + needle.length; j++) {
            subString += haystack[j].toLowerCase(); // O(n ^ 2) / O(1);
        }
        if(subString == needle.toLowerCase()) return i;
    }
    return -1;
}

