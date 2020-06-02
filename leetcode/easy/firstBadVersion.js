// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// first version;
var solution = function(isBadVersion) {
    while(isBadVersion(n)) {
        n--;
    }
    return n + 1;
};

// second version;
var solution = function(isBadVersion) {
    
    return function(n) {
        let test1 = false;
        let test2 = false;
        let version = n;
        
        while(!test1) {
            version = Math.floor(version / 2);
            if(version == 1) return version;
            if(!isBadVersion(version)) test1 = true;
        }
        while(!test2) {
            version = version + Math.floor(version / 2);
            if(isBadVersion(version)) test2 = true;
        }  
        while(isBadVersion(version)) {
            version--;
        }
        return version + 1;
    };
};

//third version;
var solution = function(isBadVersion) {
    
    return function(n) {
        let start = 1;
        let end = n;
        
        while (start < end) {
            let midpoint = start + Math.floor((end - start) / 2);
            if(!isBadVersion(midpoint)) {
                start = midpoint + 1;
            } else {
                end = midpoint;
            }
        }
        return start
    };
};