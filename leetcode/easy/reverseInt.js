// #7 Reverse Integer
// Given a 32-bit signed integer, reverse digits of an integer.

var reverse = function(x) {
    let reversed = '';

    for(let i = 0; i < String(x).length; i++) {
        if(String(x)[i] != '-') {
            reversed = String(x)[i] + reversed;
        }
    }
    
    if(reversed > 2147483647) return 0;
    
    return x >= 0 ? parseInt(reversed) : -reversed;
};