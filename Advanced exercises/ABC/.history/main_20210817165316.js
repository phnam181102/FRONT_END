function stringInString(needle, haystack) {
    if(typeof needle === 'string' && typeof haystack === 'string') {
        return haystack.includes(needle);
    } else {
        return false;
    }
}

var date = new Date();
console.log(date.prototype.getTimezoneOffset());