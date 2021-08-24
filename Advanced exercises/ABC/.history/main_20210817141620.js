function sum(a, b) {
    if(Number.isInteger(a) && Number.isInteger(b)) {
       return a + b;
    }
    else 
      return false;
}

var a = prompt('Nhập a');
var b = prompt('Nhập b');

console.log(sum(Number.parseFloat(a), Number.parseFloat(b)));