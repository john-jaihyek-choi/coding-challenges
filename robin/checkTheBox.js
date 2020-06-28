// What's in the box!? Let's check first if there is actually something IN the box before we figure out WHAT it is...
// Check if the asterisk is inside of the box. The function you write must return true only if the asterisk is INSIDE - not if it is anywhere else on or outside of the box.

// Brainstorm:
// questions:
    // will there be a case where the input doesnt form a box?
        // as for this function, will assume that the input will always form a box;
    // what would be an output if there is an item IN and OUT of the box
        // As long as there is an item inside, it will return true;
    // will the item always be an asterisk?
        // Assume that the value in the box will always be *
    
// Pseudocode:
    // declare a function called checkTheBox with a single parameter, box
        // instantitate a variable called opened with an initial value of false;
        // set a loop that iterates length property of the box minus 2 many times;
            // set opened to true;
            // set an inner loop that iterates length of the string many times.
                // set a condition to check if value at current iteration is equal to #
                    // if true, set opened to false;
                // set a condition to check if opened is true AND current iteration value is "*";
                    // if true, return true;
        // return false;

function checkTheBox(box) {

    for(let i = 1; i < box.length - 2; i++) {
        let opened = false;
        for(let j = 0; j < box[i].length; j++){
           if(box[i][j] === "#") opened = !opened;
           if(opened && (box[i][j] === "*")) return true;
        }
    }
    return false;
}