// In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

// If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.


// selfnote:
// n = number of people in a group
// judge trusts no one (this means judge can be trusted by anyone, but does not have anyone it trusts)
    // example: [[a,b],[b,j],[c,b]]
    // trust[i][0] will never have j;
// Everyone trusts the judge
// trust is an array of trust relationships

// Pseudocode:
// instantiate a variable called townPeople with an initial value of an empty object;
// instantiate a variable called judge with an initial value of -1;
// create a loop to iterate trust's length many times;
// on each iteration, store the person data on trust of i'th index of 0th index;
// create another loop that iterates trust's length many times
// on each iteration, set a condition to check if each value at trust's index on current iteration at first index does not exist
// if true, assign the value to the judge variable and return judge variable;
// otherwise, do nothing;
// finally, return judge variable;

var findJudge = function(N, trust) {
    const townPeople = {};
    let judge = -1;
    for(let i = 0; i < trust.length; i++) {
        townPeople[trust[i][0]].push(trust[i][0]);
    }
    let townPeopleArr = Object.keys(townPeople);
    for(let i = 0; i < trust.length; i++) {
        if(!townPeopleArr.includes(String(trust[i][1]))) {
            
            return judge = trust[i][1];
        }
    }
    return judge;
};

var findJudge = function(N, trust) {
    const townPeople = {};
    const judgeCandid = {};
    let judge = N;
    for(let i = 1; i <= N; i++) {
        townPeople[i] = [];
        judgeCandid[i] = [];
    }

    let temp = judgeCandid[1]
    for(let i = 0; i < trust.length; i++) {
        townPeople[trust[i][0]].push(trust[i][1]);
        judgeCandid[trust[i][1]].push(trust[i][0]);
        if(judgeCandid[trust[i][1]].length > temp.length) {
            temp = judgeCandid[trust[i][1]];
            judge = trust[i][1]
        }
    }

    if(judgeCandid[judge].length == N-1 && townPeople[judge].length == 0) {
        return Number(judge);
    } else if(trust.length < 2) {
        return judge = trust[0][1];
    } else {
        return judge = -1;
    }
};