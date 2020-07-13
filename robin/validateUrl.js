// While working on your latest app, you encounter a bug: your code lets users type in ANYTHING when they should be inputting a valid URL. As a software engineer, you should always be writing code assuming that your users may not input the value that you are expecting. In this case, why don't you write a function that checks if a string is a valid URL or not?

function validateUrl(url) {
    const address = url.match(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)
    if(address) return true
    return false
}

console.log(validateUrl('https://regexr.com/39nr7'))