// You are having a technical interview with a senior engineer today. Unfortunately, you were too nervous last night and only slept for 2 hours. The interviewer asked you to design a function to determine whether a company employee includes Michale Buble. Though you practiced many similar questions to the asked question, you couldn't concentrate. Instead of designing the actual function, alternatively, you decided to write in pseudocode. Write your pseudocode to at least surprise the interviewer.

// declare a function called findBuble with a single parameter, employees
    // instantiate a variable called currentIndex with an initial value of 0;

    // declare a shell function called isBuble with a single input parameter, index
        // set a condition to check if employee employees at index'th index is undefined
        // set a condition to check if employee employees at index'th index is equal to Michale Buble
            // if true, return true;
        // otherwise, call isBuble, passing in employees at index + 1 index;
    
    // isBuble with a single argument, 0;

function findBuble (employees) {
    let currentIndex = 0;

    function isBuble(index) {
        if(employees[index] == undefined) return false;
        if(employees[index] === 'Michale Buble') return true;
        else return isBuble(index + 1);
    }
    
    return isBuble(currentIndex);
}

console.log(findBuble(['Michale Buble']))