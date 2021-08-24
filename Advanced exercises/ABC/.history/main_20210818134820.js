var t0 = performance.now();


function checkPositiveNumbers(numbers) {

    return numbers.every(function(x) {
        return x > 0;
    })

}

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")