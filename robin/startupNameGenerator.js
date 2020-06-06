// You are a co-founder to a new, unnamed startup. After bickering for hours over what the venture's name should be, the founding team makes a compromise. They will take the first letter of each of their names, capitalized, and sorted in alphabetical order - this will be the name of the startup. Because your colleagues have pulled two all-nighters in a row, you decide to take one for the team and write a function that will return this new name.

// Pseudocode:
// Declare a function called startUpName with 2 parameters, name1 and name2;
    // instantiate a variable called name and assign it a concatenated value of value at name1 at 0th index and name2 at 0th index;
    // of its returned value, call a toUpperCase method;
    // return the returned value of calling join method of the sort method of the split method of the name object;

function startUpName(name1, name2) {
    const name = (name1[0] + name2[0]).toUpperCase();
    return name.split("").sort().join("");
}
