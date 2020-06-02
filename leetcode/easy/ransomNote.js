// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
// Each letter in the magazine string can only be used once in your ransom note.

// Pseudocode:
// declare a function called canConstruct with 2 parameters, ransomNote and magazine;
// instantiate 2 variables ransomeNoteArr and magazineArr;
// ransomeNoteArr is assigned with value returned from calling split method of the ransomNote object, passing in empty string as an argument;
// magazineArr is assigned with value returned from calling split method of the magazine object, passing in empty string as an argument;
// create a loop and iterate randsomeNote's length many times
// within the loop set a condition checking if the returned value of calling includes methods on magazineArr passing in current iteration's index of ransomNoteArr;
// if true, assign empty string value to magazineArr at ransomNoteArr's at current iteration's index;
// otherwise, return false;
// then, return true;

function canConstruct (ransomNote, magazine) {
    const ransomNoteArr = ransomNote.split('');
    const magazineArr = magazine.split('');

    for(let i = 0; i < ransomNote.length; i++) {
        if(magazineArr.includes(ransomNoteArr[i])) {
            magazineArr[magazineArr.indexOf(ransomNoteArr[i])] = '';
        } else {
            return false;
        }
    }
    return true;
}
