var t0 = performance.now();

var myArray = [
    'JS',
    'PHP',
    'Python',
    'C#',
    'Java'
]

myArray.forEach(function(elm, idx) {
    console.log(idx, elm);
});

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")