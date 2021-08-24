function stringInString(needle, haystack) {
    if (typeof needle === 'string' && typeof haystack === 'string') {
        return haystack.includes(needle);
    } else {
        return false;
    }
}
console.log(stringInString('ao', 'fooo'));