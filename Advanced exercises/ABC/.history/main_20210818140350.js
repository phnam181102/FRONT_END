function findStringsInArrayByKeyword(keyword, strings) {
    return strings.filter(function(x) {
        return x === keyword;
    })
}

var keyword = 'PHP';
var strings = ['hi', 'abc', 'chuỗi', '123']

console.log(findStringsInArrayByKeyword('PHP', ['hi', 'abc', 'chuỗi', '123']));