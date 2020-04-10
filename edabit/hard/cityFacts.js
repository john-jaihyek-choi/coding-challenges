// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// pseudocode
// declare a function cityFacts with single parameter, city object
// destructure the city object and assign the destructured value to variables name, population, and continent
// return the concatenated value of the three variables

function cityFacts(city) {
    const {name, population, continent} = city;
    return name + ' has a population of ' + population + ' and is situated in ' + continent;
}