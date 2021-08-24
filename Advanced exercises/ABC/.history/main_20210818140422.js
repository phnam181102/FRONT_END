function findStringsInArrayByKeyword(keyword, strings) {
    return strings.filter(function(x) {
        if (x.includes(keyword)) {
            return x;
        }
    })
}

console.log(findStringsInArrayByKeyword('PHP', ['PHP', 'abc', 'chuỗi', '123']));