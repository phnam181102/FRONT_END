var t0 = performance.now();

var courses = [
    'JS',
    'PHP',
    'Python',
    'C#',
    'Java'
]

courses.forEach(function(course, index) {
    console.log(index, course);
});

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")