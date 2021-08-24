function findStringsInArrayByKeyword(keyword, strings) {
    return strings.filter(function(x) {
        if (x.includes(keyword)) {
            return x;
        }
    })
}

console.log(findStringsInArrayByKeyword('PHP', ['hi', 'abc', 'chuỗi', '123']));