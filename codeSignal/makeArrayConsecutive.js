// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// sorting before looping
function makeArrayConsecutive2(statues) {
    statues.sort( (a,b) => a - b);
    let count = 0;
    
    for(let i = 1; i < statues.length; i++) {
        if(statues[i] - statues[i-1] > 1) count += statues[i] - statues[i-1] - 1;
    }
    
    return count;
}

// non-sorting method
function makeArrayConsecutive2(statues) {
    let highest = 0;
    let lowest = statues[0];
    
    for(let i = 0; i < statues.length; i++) {
        if(statues[i] > highest) highest = statues[i];
        if(statues[i] < lowest) lowest = statues[i];
    }

    return highest - lowest - statues.length + 1;
}