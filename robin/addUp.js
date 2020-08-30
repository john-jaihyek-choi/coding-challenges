// Robin comes to you today with a challenge about arrays: can you write a function that receives two arrays of integers and one target integer value and determines if there is a pair of numbers that add up to the target value? One number must come from each array and the other must come from the second array. Return true if at least one pair exists that adds up to the target value - otherwise, return false.
// ex) addUp([1, 2], [2, 3, 5], 4) --> true

function addUp(arr1, arr2, num) {
    const targetArr = {};

    for(let i = 0; i < arr1.length; i++) {
        const target = num - arr1[i];
        targetArr[target] = i+1;
    }

    for(let i = 0; i < arr2.length; i++) {
        if(targetArr[arr2[i]]) return true;
    }

    console.log(targetArr);

    return false;
}

console.log(addUp([5, 7], [2, 3, 5], 4));