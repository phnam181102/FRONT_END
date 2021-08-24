function findStringsInArrayByKeyword(keyword, strings) {
    return strings.filter(function(x) {
        return x === keyword;
    })
}