// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function but use an "arrow function".

// pseudocode
// declare an arrow function helloName and give a parameter name;
// concatenate the value of name parameter to the string "Hello " and concatenate the string ! at the end of it
// asign the returned value to const variable greeting
// return greeting

const helloName = name => {
    const greeting = 'Hello ' + name + '!';
    return greeting;
}