// Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...
//Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.

//brainstorm
// 1, 4, 9, 16
// 1 = 1
// 2 = 4
// 3 = 9
// 4 = 16
// logic = n^2

//pseudocode
// declare a function stackBoxes and give a single parameter, stack;
// multiply the stack parameter by its own and assign it to const variable totalCubes
// return the value of totalCubes

function stackBoxes(stacks) {
    const totalCubes = stacks * stacks;
    return totalCubes;
}