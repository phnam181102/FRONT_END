var t0 = performance.now();

var myArray = [
    'JS',
    'PHP',
    'Python',
    'C#',
    'Java'
]

myArray.forEach(function(elm) {
    console.log(elm);
});

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")