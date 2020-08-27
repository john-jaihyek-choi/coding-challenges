// I'm sure by now you know that computers operate in binary, right? Just a whole bunch of 0s and 1s. These are very powerful numbers. A computer's processor is made up of circuits that are composed of billions of transistors - switches that are activated by the electronic signals it receives. The 1s and 0s reflect each on and off state of a transistor.
// Can you write a function that accepts a string of 0s and 1s and returns true if every consecutive sequence of 1s is followed by a consecutive sequence of 0s of the same length.

// For example:
// 111000110010 --> true
// 1001101110 --> false

function binarySequence(string) {
    let newString = '';

    for(let i = 0; i < string.length; i++) {
        newString += string[i];
        if(string[i+1] != string[i] && string[i+1]) newString += ',';
    }

    const sequences = newString.split(',');

    for(let i = 1; i < sequences.length; i+=2) {
        if(sequences[i-1].length != sequences[i].length || sequences.length % 2 === 1) return false;
    }

    return true;
}

console.log(binarySequence('01010101010'));