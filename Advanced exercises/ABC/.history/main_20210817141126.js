function sum(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    } else {
        return false;
    }
}
var a = prompt();
console.log(sum());