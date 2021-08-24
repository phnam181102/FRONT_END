function findStringsInArrayByKeyword(keyword, strings) {
    return strings.filter(function(x) {
        if (x === keyword) {
            return x;
        }
    })
}

console.log(findStringsInArrayByKeyword('PHP', ['PHP', 'Học PHP', 'chuỗi', '123']));