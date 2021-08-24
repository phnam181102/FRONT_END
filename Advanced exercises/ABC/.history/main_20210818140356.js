function findStringsInArrayByKeyword(keyword, strings) {
    return strings.filter(function(x) {
        return x === keyword;
    })
}

console.log(findStringsInArrayByKeyword('PHP', ['hi', 'abc', 'chuỗi', '123']));