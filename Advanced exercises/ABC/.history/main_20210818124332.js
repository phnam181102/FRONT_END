var t0 = performance.now();

var myArray = [
    'JS',
    'PHP',
    'Python',
    'C#',
    'Java',
    'JS',
    'PHP',
    'Python',
    'C#',
    'Java',
    'JS',
    'PHP',
    'Python',
    'C#'
]
var i = 0;
var lengthArray = myArray.length;
while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
}


var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")