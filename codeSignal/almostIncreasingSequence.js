// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array

// Pseudo Code:
// I will start by naming few variables to easily keep track of the positions I'm comparing on each iteration:
    // cur = current value of the iteration - sequence[i]
    // prev = previous value of the iteration - sequence[i - 1]
    // next = next value of the iteration - sequence[i + 1]
    // twoStepsBack = value of the item at 2 indexes back from the current value - sequence[i-2]
    // removableCount = 0
// Essentially, there are total of 3 things to check for to see if a sequence could be strictly increasing by removing 1 item off of the list.
// first, I need to check if cur value is greater than prev value
    // if cur value is less than or equal to prev, it indicates that this current value can be removed off of the list
        // on each case of cur being less than or equal to prev, we will increase the number of removableCount by 1;
    // on ever case of cur less than or equal prev, we need to make sure 2 conditions is satisfied:
        // we need to make sure that the cur val is still greater than value of twoStepsBack
        // AND
        // we need to make sure that our prev value is still less than our next value since the current value is the value that's going to be eliminated

function almostIncreasingSequence(sequenceArr) {
    let removableCount = 0;

    for (i = 0; i < sequenceArr.length; i++) {
        const cur = sequenceArr[i];
        const prev = sequenceArr[i-1];
        const next = sequenceArr[i+1];

        if (cur <= prev) {
            removableCount++;

            if(twoStepsBack <= cur && next <= prev) {
                return false
            }
        }
    }

    return removableCount >= 2;
}