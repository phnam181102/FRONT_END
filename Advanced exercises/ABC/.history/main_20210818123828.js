var t0 = performance.now();

var i = 0;
while (i <= 100) {
    console.log(i);
    i++;
}

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")