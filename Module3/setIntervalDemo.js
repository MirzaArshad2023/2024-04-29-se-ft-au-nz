let x = 0
let timerID = setInterval(()=> 
{
   console.log(x++)

}, 1000)

setTimeout(()=> clearInterval(timerID), 3000)

function repeatInterval(delay, limit) {
    let counter = 1; // part of the outer environment record for repeatInterval
    // intervalTimer is a reference to interval, to allow it to be cancelled
    let intervalTimer = setInterval(function repeatThis() {
        console.log('repeatInterval: repeated ' + counter + ' of ' + limit + ' times');
        if (counter == limit) clearInterval(intervalTimer); //cancel interval after execution limit
        counter++; // keep track of how many times the interval has executed, in outer environment
    }, delay); // delay is milliseconds between intervals
}
repeatInterval(2000, 10); // make the interval repeat every 2 seconds for a max of 10 times