// Do you remember learning your multiplication tables? For some, it was really easy. For others, they still have to perform multiplication using odd tricks. Today, we're all lucky, because we can practice by writing code that will print all the multiplication tables from 1 to X. The format could look something like this: '1 x 1 = 1' . Have fun taking a trip down memory lane!

// Brainstorm:
// format: number x number = value;
// console log each iteration to return the above format

// Pseudocode:
// naive solution:
// declare a function called multiplicationTable with a single parameter number;
// set a loop that iterates number many times
    // within it,
    // set another loop that iterates 9 times;
        // on each iteration of the inner loop, call the log method of console passing in i + j = i*j;
// since the function will simply print, no need to return anything;

function multiplicationTable(number) {
    for(let i = 1; i <= number; i++) {
        for(let j = 1; j <= 9; j++) {
            console.log(`${i} x ${j} = ${i*j}`)
        }
    }
}

console.log(multiplicationTable(9))


// Other approach:

function multiplicationTable(number) {
    const object = {};

    for(let i = 1; i <= number; i++) {
        object[i] = [];
    }

    for(number in object) {
        for(let j = 1; j <= 9; j++) {
            console.log(`${number} x ${j} = ${number * j}`)
        }
    }
}

multiplicationTable(9)