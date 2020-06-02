// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Brainstorm Note:
// J is Jewel
// S is Stone
// each chracters of Jewel represents types of Jewels
// I need to find every possible match of chracter in Jewel and find a sum of all addition

// Pseudocode:
// declare a function called numJewelsInStones with 2 parameters, J for Jewel and S for stones;
// instantiate a variable named jewelCounter and assign it an initial value of 0;
// create a loop to loop through variable J's length many times;
// within the iteration, set another loop that iterates S's length many times;
// within the second iteration, set a condition checking if J at i'th index is strictly equal to S at j'th index;
// if true, increment the jewelCount by 1;
// otherwise, do nothing;
// after all iteration is completed, return the value of the jewelCount variable

function numJewelsInstones (J, S) {
    let jewelCount = 0;
    for(let i = 0; i < J.length; i++) {
        for(let j = 0; j < S.length; j++) {
            if(J[i] === S[j]) jewelCount++;
        }
    }
    return jewelCount;
}