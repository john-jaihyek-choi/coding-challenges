// Write a function min that takes two arguments and returns their minimum.

function min(num1, num2) {
    const first = Number(num1);
    const second = Number(num2);

    if(first > second) return second;
    return first;
}

console.log(min(0, 10));