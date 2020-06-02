// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// Selfnote:
// Rules for robbing:
    // 1. I can only rob houses that are NOT adjacent to the previous houses I robbed per night
// Objective:
    // I need to maximize the amount of money that I rob from the list of houses given
// Naive guess:
    // given the above conditions,
        // I will need to loop through the list and make sure I move to houses that are 2 spaces away
        // Initial Guess:
            // I can set two loops, one starting from 0 and one other starting from 1
            // and then compare the sum value of the two and return the higher value
        // Above will fail if within the list, there is a possible combination of sum that is not exactly 2 spaces away from each other
// What can I do to go around the above issue?


