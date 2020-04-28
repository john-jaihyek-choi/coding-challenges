// Sometimes an object will be missing properties we are expecting. We can avoid undefined errors by using default values. Use ES6 object destructuring to add a default value of 1 to the one variable. Ignore the .toString() function (used for validation).

// pseudocode
// declare a variable str with an object with property of 'two' with a value of 2;
// destructure one and two from the object;
// set a default value to one property with a value of 1

const str = `{ one = 1, two } = { two : 2}.toString()`;