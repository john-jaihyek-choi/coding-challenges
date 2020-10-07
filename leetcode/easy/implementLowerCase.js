// 

var toLowerCase = function(str) {
    let newStr = ''
    
    for(let i = 0; i < str.length; i++) {
        const charCode = str[i].charCodeAt()
        if(charCode < 91 && charCode > 64) {
            newStr += String.fromCharCode(charCode + 32);
        } else {
            newStr += str[i];
        };
    }

    return newStr;
};

toLowerCase('H&ello');